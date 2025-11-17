import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright設定ファイル
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',

  /* テストの最大実行時間 */
  timeout: 30 * 1000,

  /* テスト内の各assertionのタイムアウト */
  expect: {
    timeout: 5000
  },

  /* 失敗時のみ再試行 */
  fullyParallel: true,

  /* CI環境での設定 */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  /* 並列実行するワーカー数 */
  workers: process.env.CI ? 1 : undefined,

  /* レポーター設定 */
  reporter: 'html',

  /* すべてのテストで共通の設定 */
  use: {
    /* ベースURL */
    baseURL: 'http://localhost:3000',

    /* 失敗時のトレース収集 */
    trace: 'on-first-retry',

    /* スクリーンショット設定 */
    screenshot: 'only-on-failure',

    /* ビデオ設定 */
    video: 'retain-on-failure',
  },

  /* テスト対象のブラウザ設定 */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // ヘッドレスモードでも音声を有効化、サンドボックス無効化（Docker/CI環境用）
        launchOptions: {
          args: [
            '--autoplay-policy=no-user-gesture-required',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
          ]
        }
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: {
          firefoxUserPrefs: {
            'media.autoplay.default': 0,
            'media.autoplay.blocking_policy': 0
          }
        }
      },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* モバイルビューポートのテスト */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* 開発サーバーの起動設定 */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
