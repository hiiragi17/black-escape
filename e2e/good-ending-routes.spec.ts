import { test, expect, type Page } from '@playwright/test';
import { storyData } from '@/data/story';
import {
  getEndingScenes,
  getGoodEndingScenes,
  getShortestRoute,
  getLongestRoute,
  getRandomRoute,
  getStoryTimeRegressions,
  type RouteStep,
} from './utils/story-validator';

/**
 * ルート接続性・整合性の検証
 *
 * 1. 静的検証: 全エンディングへの最短ルートが途切れず繋がり、正しく終端するか。
 * 2. 整合性リント: 「物語の時間が逆行する」合流エッジ（巻き戻り矛盾の候補）が
 *    レビュー済みの許可リスト以外に出ていないか。
 * 3. ブラウザE2E: グッドエンドへ最短／最長／ランダム（回り道）の各ルートを
 *    実画面でクリック再生し、どのルートでも最後まで遊べてエンディングへ到達するか。
 */

const TITLE_TEXT = /ここは片田舎のとある会社/;

function endingMarker(scene: string): string | null {
  const text = storyData[scene as keyof typeof storyData]?.text ?? '';
  const m = text.match(/【[^】]*エンド[^】]*】/);
  return m ? m[0] : null;
}

// ============================================================
// 1. 静的検証（ブラウザ不要・全エンディング対象）
// ============================================================
test.describe('ルート接続性の静的検証', () => {
  test('全エンディングに start から繋がる有効なルートが存在する', () => {
    const endings = getEndingScenes();
    const broken: string[] = [];

    for (const ending of endings) {
      const route = getShortestRoute(ending);
      if (route === null) {
        broken.push(`${ending}: 到達不可能`);
        continue;
      }
      let cursor = 'start';
      let ok = true;
      for (const step of route) {
        if (step.scene !== cursor) {
          broken.push(`${ending}: ステップが不連続 (${cursor} → ${step.scene})`);
          ok = false;
          break;
        }
        const scene = storyData[step.scene as keyof typeof storyData];
        const choice = scene?.choices?.find(
          (c) => c.text === step.choiceText && c.next === step.next
        );
        if (!choice) {
          broken.push(`${ending}: 選択肢が存在しない (${step.scene} → ${step.next})`);
          ok = false;
          break;
        }
        cursor = step.next;
      }
      if (ok && cursor !== ending) {
        broken.push(`${ending}: 終端不一致 (${cursor})`);
      }
    }

    if (broken.length > 0) {
      console.log('=== 繋がっていないルート ===');
      broken.forEach((b) => console.log('  ' + b));
    } else {
      console.log(`✅ 全 ${endings.length} エンディングに有効なルートが繋がっています`);
    }
    expect(broken).toEqual([]);
  });

  test('グッドエンドが3つ存在し、それぞれ最短ルートを持つ', () => {
    const goods = getGoodEndingScenes();
    console.log('=== グッドエンド ===');
    for (const g of goods) {
      const route = getShortestRoute(g);
      console.log(`  ${g}: ${route ? route.length + '手' : '到達不可'}`);
      expect(route).not.toBeNull();
    }
    expect(goods.length).toBe(3);
  });
});

// ============================================================
// 2. 整合性リント（物語時間の逆行＝巻き戻り矛盾の候補）
// ============================================================
// 下記は内容をレビュー済みで、選択肢テキストが遷移を明示しているため
// 物語上の矛盾がない（許可済み）合流エッジ。新たな逆行が増えたら
// このテストが失敗するので、その都度本文の整合性を確認すること。
const ALLOWED_REGRESSIONS = new Set<string>([
  'lawyer_low_settlement_accept->continue_improved_company', // 和解後「改善された会社に残る」＝整合的
  'taxi_home->procrastinate',                               // 「このまま我慢し続ける」＝現状維持で年月が経過
  'refuse_boss_task->research_union',                       // 上司を拒否→組合を検討（前進）
  'refuse_boss_task->labor_inspection',                    // 上司を拒否→労基署へ（前進）
]);

test.describe('物語整合性リント', () => {
  test('レビュー外の「巻き戻り」合流エッジが存在しない', () => {
    const regressions = getStoryTimeRegressions(3);
    const unreviewed = regressions.filter(
      (r) => !ALLOWED_REGRESSIONS.has(`${r.from}->${r.to}`)
    );

    console.log('=== 物語時間が逆行する合流エッジ ===');
    for (const r of regressions) {
      const mark = ALLOWED_REGRESSIONS.has(`${r.from}->${r.to}`) ? '✓レビュー済' : '⚠️未レビュー';
      console.log(`  [${mark}] gap${r.gap} ${r.from} →「${r.choiceText}」→ ${r.to}`);
    }

    if (unreviewed.length > 0) {
      console.log(
        '\n新たな巻き戻り合流が見つかりました。流入先シーンの本文が、' +
          'この選択肢から来ても矛盾しないか確認し、問題なければ ALLOWED_REGRESSIONS に追加してください。'
      );
    }
    expect(unreviewed.map((r) => `${r.from}->${r.to}`)).toEqual([]);
  });
});

// ============================================================
// 3. ブラウザE2E（最短／最長／ランダムの各ルートを実画面で再生）
// ============================================================

/** 与えられたルートを実画面でクリック再生し、エンディング到達を確認する */
async function playRoute(page: Page, ending: string, steps: RouteStep[]) {
  await page.goto('/');
  await page.getByRole('link', { name: /ゲームスタート/ }).click();
  await expect(page).toHaveURL('/novel');
  await expect(page.getByText(TITLE_TEXT)).toBeVisible({ timeout: 10000 });

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const escaped = step.choiceText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const button = page.getByRole('button', {
      name: new RegExp(`^[A-Z]\\.\\s*${escaped}$`),
    });
    await expect(
      button,
      `ステップ${i + 1}「${step.choiceText}」(${step.scene})のボタンが表示されない`
    ).toBeVisible({ timeout: 15000 });
    await button.click();
  }

  const markerText = endingMarker(ending);
  if (markerText) {
    await expect(page.getByText(markerText)).toBeVisible({ timeout: 15000 });
  }
  await expect(page.getByRole('button', { name: /タイトルに戻る/ })).toBeVisible({
    timeout: 15000,
  });
}

test.describe('グッドエンドへのルートを実画面で再生（最短・最長・回り道）', () => {
  // 長いルート（最長53手など）に備えて余裕を持たせる
  test.setTimeout(180_000);

  for (const ending of getGoodEndingScenes()) {
    const marker = endingMarker(ending) ?? ending;

    const variants: Array<{ label: string; route: RouteStep[] | null }> = [
      { label: '最短', route: getShortestRoute(ending) },
      { label: '最長', route: getLongestRoute(ending) },
      { label: '回り道(seed=1)', route: getRandomRoute(ending, 1) },
      { label: '回り道(seed=7)', route: getRandomRoute(ending, 7) },
    ];

    for (const v of variants) {
      test(`「${marker}」へ${v.label}ルートで到達できる (${v.route?.length}手)`, async ({
        page,
      }) => {
        expect(v.route, `${v.label}ルートが生成できない`).not.toBeNull();
        await playRoute(page, ending, v.route as RouteStep[]);
      });
    }
  }
});
