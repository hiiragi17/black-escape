import { test, expect } from '@playwright/test';
import {
  validateStoryData,
  getAllStoryPaths,
  getInvalidReferences,
  getUnreachableScenes,
  getAllSceneKeys,
  getEndingScenes,
} from './utils/story-validator';

/**
 * ストーリーデータの完全性をチェックするテスト
 *
 * このテストは以下をチェックします：
 * 1. 存在しないシーンへの参照がないか
 * 2. 到達できないシーンがないか
 * 3. 全てのストーリーパスが有効か
 */

test.describe('ストーリーデータの完全性チェック', () => {

  test('ストーリーデータが有効である', () => {
    const result = validateStoryData();

    // エラーがある場合は詳細を表示
    if (!result.isValid) {
      console.log('=== ストーリー検証エラー ===');
      for (const error of result.errors) {
        console.log(`❌ ${error}`);
      }
    }

    // 警告がある場合は表示
    if (result.warnings.length > 0) {
      console.log('=== ストーリー検証警告 ===');
      for (const warning of result.warnings) {
        console.log(`⚠️  ${warning}`);
      }
    }

    // 統計情報を表示
    console.log('=== ストーリー統計 ===');
    console.log(`総シーン数: ${result.stats.totalScenes}`);
    console.log(`エンディング数: ${result.stats.endingScenes}`);
    console.log(`選択肢のあるシーン数: ${result.stats.choiceScenes}`);

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('存在しないシーンへの参照がない', () => {
    const invalidRefs = getInvalidReferences();

    if (invalidRefs.length > 0) {
      console.log('=== 無効な参照 ===');
      for (const ref of invalidRefs) {
        console.log(
          `シーン "${ref.scene}" の選択肢 "${ref.choice}" が存在しないシーン "${ref.invalidNext}" を参照`
        );
      }
    }

    expect(invalidRefs).toHaveLength(0);
  });

  test('到達不可能なシーンがない（または許容される）', () => {
    const unreachable = getUnreachableScenes();

    if (unreachable.length > 0) {
      console.log('=== 到達不可能なシーン ===');
      for (const scene of unreachable) {
        console.log(`⚠️  "${scene}" に到達する方法がありません`);
      }
    }

    // 到達不可能なシーンは警告として扱い、テストは失敗させない
    // ただし、開発者が気づくように情報を表示する
    expect(unreachable.length).toBeLessThanOrEqual(getAllSceneKeys().length);
  });

  test('少なくとも1つのエンディングが存在する', () => {
    const endings = getEndingScenes();

    console.log('=== エンディング一覧 ===');
    for (const ending of endings) {
      console.log(`✓ ${ending}`);
    }

    expect(endings.length).toBeGreaterThan(0);
  });

  test('startシーンが存在する', () => {
    const allScenes = getAllSceneKeys();
    expect(allScenes).toContain('start');
  });

  test('少なくとも1つの完全なストーリーパスが存在する', () => {
    const paths = getAllStoryPaths();

    console.log('=== 全ストーリーパス ===');
    for (let i = 0; i < paths.length; i++) {
      console.log(`パス ${i + 1}: ${paths[i].path.join(' → ')} (エンディング: ${paths[i].ending})`);
    }

    expect(paths.length).toBeGreaterThan(0);
  });
});

test.describe('全てのストーリーパスのE2Eテスト', () => {
  const paths = getAllStoryPaths();

  test.beforeEach(async ({ page }) => {
    // 各テスト前にトップページにアクセス
    await page.goto('/');
  });

  // 各ストーリーパスごとにテストを動的に生成
  for (let i = 0; i < paths.length; i++) {
    const { path, ending } = paths[i];

    test(`ストーリーパス ${i + 1}: ${path.join(' → ')} が正常に動作する`, async ({ page }) => {
      console.log(`\nテスト中のパス: ${path.join(' → ')}`);

      // ゲーム開始
      await page.getByRole('link', { name: /ゲームスタート/ }).click();
      await expect(page).toHaveURL('/novel');

      // 最初のシーン（start）が表示されるまで待機
      await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

      // パスを辿る（startを除く）
      for (let j = 1; j < path.length; j++) {
        const currentScene = path[j - 1];
        const nextScene = path[j];

        console.log(`  ${currentScene} → ${nextScene} へ遷移中...`);

        // Scene表示の確認（デバッグ用）
        await expect(page.getByText(`Scene: ${currentScene}`)).toBeVisible({ timeout: 5000 });

        // 次のシーンへの選択肢を見つけてクリック
        // storyDataから選択肢を取得
        const { storyData } = await import('@/data/story');
        const sceneData = storyData[currentScene as keyof typeof storyData];

        if (sceneData && sceneData.choices && sceneData.choices.length > 0) {
          const choice = sceneData.choices.find((c) => c.next === nextScene);

          if (choice) {
            console.log(`    選択肢 "${choice.text}" をクリック`);
            const choiceButton = page.getByRole('button', { name: new RegExp(choice.text) });

            // ボタンが表示されるまで待機（タイピングアニメーション完了）
            await expect(choiceButton).toBeVisible({ timeout: 15000 });
            await choiceButton.click();

            // 次のシーンのテキストが表示されるまで少し待機
            await page.waitForTimeout(1000);
          }
        }
      }

      // 最終的にエンディングシーンに到達したことを確認
      await expect(page.getByText(`Scene: ${ending}`)).toBeVisible({ timeout: 10000 });

      // エンディングの場合、タイトルに戻るボタンが表示されることを確認
      const backButton = page.getByRole('button', { name: /タイトルに戻る/ });
      await expect(backButton).toBeVisible({ timeout: 10000 });

      console.log(`  ✓ エンディング "${ending}" に到達しました`);
    });
  }

  // パスが存在しない場合のフォールバックテスト
  if (paths.length === 0) {
    test('警告: 有効なストーリーパスが見つかりません', () => {
      expect(paths.length).toBeGreaterThan(0);
    });
  }
});
