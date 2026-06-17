import { test, expect } from '@playwright/test';
import { storyData } from '@/data/story';
import {
  getEndingScenes,
  getGoodEndingScenes,
  getShortestRoute,
  type RouteStep,
} from './utils/story-validator';

/**
 * ルート接続性の検証
 *
 * 1. 静的検証: 全エンディングへの最短ルートを計算し、選択肢の next が
 *    途切れず繋がって、正しくそのエンディングで終端するかを確認する。
 * 2. ブラウザE2E: グッドエンドへの最短ルートを実際の画面でクリックして再生し、
 *    各シーンが描画され最終的にエンディングへ到達できるかを確認する。
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

      // 到達できない（どの選択肢を辿っても届かない）
      if (route === null) {
        broken.push(`${ending}: 到達不可能`);
        continue;
      }

      // ルートの各ステップが実データと整合し、途切れず繋がっているか
      let cursor = 'start';
      let ok = true;
      for (const step of route) {
        // 直前の next と現在のシーンが一致しているか（連結性）
        if (step.scene !== cursor) {
          broken.push(`${ending}: ステップが不連続 (${cursor} → ${step.scene})`);
          ok = false;
          break;
        }
        // 当該シーンに、その選択肢が実在するか
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
      if (!ok) continue;

      // 最終的に目的のエンディングで終端しているか
      if (cursor !== ending) {
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
// 2. ブラウザE2E（グッドエンドへの最短ルートを実際に再生）
// ============================================================
test.describe('グッドエンドへのルートを実画面で再生', () => {
  // 各グッドエンドの最短ルートを動的に生成してテスト化
  for (const ending of getGoodEndingScenes()) {
    const route = getShortestRoute(ending);
    const marker = endingMarker(ending) ?? ending;

    test(`「${marker}」へ最短ルートで到達できる (${route?.length}手)`, async ({ page }) => {
      expect(route).not.toBeNull();
      const steps = route as RouteStep[];

      // ゲーム開始
      await page.goto('/');
      await page.getByRole('link', { name: /ゲームスタート/ }).click();
      await expect(page).toHaveURL('/novel');
      await expect(page.getByText(TITLE_TEXT)).toBeVisible({ timeout: 10000 });

      // ルートに沿って選択肢を順にクリック
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        // 「A. <選択肢テキスト>」形式のボタンを正確に特定
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

      // エンディングに到達したことを確認
      const markerText = endingMarker(ending);
      if (markerText) {
        await expect(page.getByText(markerText)).toBeVisible({ timeout: 15000 });
      }
      await expect(
        page.getByRole('button', { name: /タイトルに戻る/ })
      ).toBeVisible({ timeout: 15000 });
    });
  }
});
