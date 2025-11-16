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
    await expect(page.getByText('設定')).toBeVisible();
  });

  test('ゲームを開始できる', async ({ page }) => {
    // ゲームスタートボタンをクリック
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // ゲームページに遷移したことを確認
    await expect(page).toHaveURL('/novel');

    // スタートシーンのテキストが表示されることを確認
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // Scene表示がstartになっていることを確認
    await expect(page.getByText('Scene: start')).toBeVisible();
  });

  test('バッドエンディングまでのフローが正常に動作する', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();
    await expect(page).toHaveURL('/novel');

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 「出社する」ボタンが表示されるまで待機（タイピングアニメーション完了を待つ）
    const workButton = page.getByRole('button', { name: /出社する/ });
    await expect(workButton).toBeVisible({ timeout: 15000 });

    // 「出社する」を選択
    await workButton.click();

    // バッドエンディングのテキストが表示されることを確認
    await expect(page.getByText(/死ぬほど働かされてしまった/)).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/バッドエンド/)).toBeVisible();

    // Scene表示がoverwork-badになっていることを確認
    await expect(page.getByText('Scene: overwork-bad')).toBeVisible();

    // タイトルに戻るボタンが表示されることを確認
    const backButton = page.getByRole('button', { name: /タイトルに戻る/ });
    await expect(backButton).toBeVisible({ timeout: 10000 });

    // X共有ボタンが表示されることを確認
    await expect(page.getByRole('button', { name: /結果をシェア/ })).toBeVisible();
  });

  test('グッドエンディングまでのフローが正常に動作する', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();
    await expect(page).toHaveURL('/novel');

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 「逃げる」ボタンが表示されるまで待機（タイピングアニメーション完了を待つ）
    const escapeButton = page.getByRole('button', { name: /逃げる/ });
    await expect(escapeButton).toBeVisible({ timeout: 15000 });

    // 「逃げる」を選択
    await escapeButton.click();

    // グッドエンディングのテキストが表示されることを確認
    await expect(page.getByText(/あなたは逃げ切り、自由になった/)).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/グッドエンド/)).toBeVisible();

    // Scene表示がfreedom-goodになっていることを確認
    await expect(page.getByText('Scene: freedom-good')).toBeVisible();

    // タイトルに戻るボタンが表示されることを確認
    const backButton = page.getByRole('button', { name: /タイトルに戻る/ });
    await expect(backButton).toBeVisible({ timeout: 10000 });

    // X共有ボタンが表示されることを確認
    await expect(page.getByRole('button', { name: /結果をシェア/ })).toBeVisible();
  });

  test('バッドエンディングからタイトルに戻れる', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 「出社する」を選択してバッドエンドへ
    const workButton = page.getByRole('button', { name: /出社する/ });
    await expect(workButton).toBeVisible({ timeout: 15000 });
    await workButton.click();

    // バッドエンディングが表示されるまで待機
    await expect(page.getByText(/バッドエンド/)).toBeVisible({ timeout: 10000 });

    // タイトルに戻るボタンをクリック
    const backButton = page.getByRole('button', { name: /タイトルに戻る/ });
    await expect(backButton).toBeVisible({ timeout: 10000 });
    await backButton.click();

    // トップページに戻ったことを確認
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'ブラック企業からの脱出' })).toBeVisible();
  });

  test('グッドエンディングからタイトルに戻れる', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 「逃げる」を選択してグッドエンドへ
    const escapeButton = page.getByRole('button', { name: /逃げる/ });
    await expect(escapeButton).toBeVisible({ timeout: 15000 });
    await escapeButton.click();

    // グッドエンディングが表示されるまで待機
    await expect(page.getByText(/グッドエンド/)).toBeVisible({ timeout: 10000 });

    // タイトルに戻るボタンをクリック
    const backButton = page.getByRole('button', { name: /タイトルに戻る/ });
    await expect(backButton).toBeVisible({ timeout: 10000 });
    await backButton.click();

    // トップページに戻ったことを確認
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: 'ブラック企業からの脱出' })).toBeVisible();
  });

  test('選択肢が正しく表示される', async ({ page }) => {
    // ゲーム開始
    await page.getByRole('link', { name: /ゲームスタート/ }).click();

    // スタートシーンが表示されるまで待機
    await expect(page.getByText(/ここは片田舎のとある会社/)).toBeVisible({ timeout: 10000 });

    // 選択肢のラベルが表示されることを確認
    await expect(page.getByText('選択してください')).toBeVisible({ timeout: 15000 });

    // 両方の選択肢が表示されることを確認
    await expect(page.getByRole('button', { name: /出社する/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /逃げる/ })).toBeVisible();

    // 選択肢にA.とB.のラベルが付いていることを確認
    await expect(page.getByText('A.')).toBeVisible();
    await expect(page.getByText('B.')).toBeVisible();
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

    // テキストが完全に表示されたことを確認
    await expect(page.getByText(/ここは片田舎のとある会社。どうしようもない上司と訳のわからない人しかいない、変人の巣窟。給料は安く、残業時間は多い。こんな会社辞めてやりたい。どうしますか？/)).toBeVisible();
  });
});
