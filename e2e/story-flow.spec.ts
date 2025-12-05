import { test, expect } from '@playwright/test';

/**
 * ストーリーフローのE2Eテスト
 * 全てのストーリーが破綻なく続いているかを確認します
 */

test.describe('ブラック企業からの脱出 - ストーリーフロー', () => {

  test.beforeEach(async ({ page }) => {
    // 各テスト前にトップページにアクセス
    await page.goto('/');
  });

  test('トップページが正しく表示される', async ({ page }) => {
    // タイトルが表示されることを確認
    await expect(page.getByRole('heading', { name: 'ブラック企業からの脱出' })).toBeVisible();

    // サブタイトルが表示されることを確認
    await expect(page.getByText('逃げ切って自由を手に入れろ！')).toBeVisible();

    // ゲームスタートボタンが表示されることを確認
    await expect(page.getByRole('link', { name: /ゲームスタート/ })).toBeVisible();

    // 設定ボタンが表示されることを確認
    await expect(page.getByRole('link', { name: /設定/ })).toBeVisible();
  });

  test('設定ページに遷移できる', async ({ page }) => {
    // 設定ボタンをクリック
    await page.getByRole('link', { name: /設定/ }).click();

    // 設定ページに遷移したことを確認
    await expect(page).toHaveURL('/settings');

    // 設定ページのタイトルが表示されることを確認
    await expect(page.getByRole('heading', { name: /⚙️ 設定/ })).toBeVisible();
  });

  test('ゲームを開始できる', async ({ page }) => {
    // ゲームスタートボタンをクリック
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // ゲームページに遷移したことを確認
    await expect(page).toHaveURL('/novel');

    // スタートシーンのテキストが表示されることを確認
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 選択肢が表示されることを確認
    await expect(page.getByRole('button', { name: /そろそろ転職/ })).toBeVisible({ timeout: 15000 });
  });

  test('選択肢ボタンをクリックして次のシーンに進める', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();
    await expect(page).toHaveURL('/novel');

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 最初の選択肢ボタンが表示されるまで待機（タイピングアニメーション完了を待つ）
    const firstChoice = page.getByRole('button', { name: /そろそろ転職/ });
    await expect(firstChoice).toBeVisible({ timeout: 15000 });

    // 選択肢をクリック
    await firstChoice.click();

    // 次のシーンのテキストが表示されることを確認
    await expect(page.getByText(/このところずっと脳内にちらついていた/)).toBeVisible({ timeout: 10000 });
  });

  test('複数の選択肢が表示される', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();
    await expect(page).toHaveURL('/novel');

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 複数の選択肢が表示されることを確認（3つの選択肢）
    await expect(page.getByRole('button', { name: /そろそろ転職/ })).toBeVisible({ timeout: 15000 });
    await expect(page.getByRole('button', { name: /転職活動面倒/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /労働組合/ })).toBeVisible();
  });

  test('選択肢ラベルが正しく表示される', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 選択肢のラベルが表示されることを確認
    await expect(page.getByText('選択してください')).toBeVisible({ timeout: 15000 });

    // 選択肢にA., B., C.のラベルが付いていることを確認
    await expect(page.getByText('A.')).toBeVisible();
    await expect(page.getByText('B.')).toBeVisible();
    await expect(page.getByText('C.')).toBeVisible();
  });

  test('タイピングアニメーションが動作する', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();
    await expect(page).toHaveURL('/novel');

    // タイピングカーソル（白い四角）が最初に表示されることを確認
    // タイピング中はカーソルが表示されている
    const typingCursor = page.locator('.animate-pulse.inline-block.w-3.h-7.bg-white');
    await expect(typingCursor).toBeVisible({ timeout: 5000 });

    // タイピングが完了するまで待機（カーソルが消える）
    await expect(typingCursor).not.toBeVisible({ timeout: 15000 });

    // テキストが表示されたことを確認（部分一致）
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible();
    await expect(page.getByText(/給料は安く、残業時間は多い/)).toBeVisible();
  });
});
