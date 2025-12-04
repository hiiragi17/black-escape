# Playwrightテスト失敗の原因分析レポート

## 📋 概要

Playwrightテストが頻繁に失敗する原因を調査した結果、以下の致命的な問題が判明しました。

## ❌ 主要な問題

### 1. **致命的: 組み合わせ爆発によるメモリ不足**

`e2e/story-integrity.spec.ts` の109-180行目で、全ストーリーパスをE2Eテストしようとしています。

```typescript
// 問題のコード（109行目〜）
test.describe('全てのストーリーパスのE2Eテスト', () => {
  const paths = getAllStoryPaths();  // ← ここで膨大な数のパスを生成

  for (let i = 0; i < paths.length; i++) {
    // 各パスごとにテストを動的生成
    test(`ストーリーパス ${i + 1}...`, async ({ page }) => {
      // ...
    });
  }
});
```

#### 問題の詳細:

| 項目 | 値 |
|------|-----|
| 総シーン数 | 87 |
| 選択肢があるシーン | 73 |
| 総選択肢数 | 209 |
| 平均選択肢数/シーン | 2.86 |
| **推定パス数** | **37,000以上** 🔥 |

#### 影響:

- `getAllStoryPaths()` の実行だけでメモリ不足でクラッシュ
- 仮に計算できても、37,000個以上のテストケースが動的生成される
- 各テストがブラウザを起動してページ遷移するため、膨大なリソースを消費

### 2. **5つのブラウザプロジェクトで実行**

`playwright.config.ts` で5つのブラウザプロジェクトを設定:

```typescript
projects: [
  { name: 'chromium' },      // ← 1
  { name: 'firefox' },       // ← 2
  { name: 'webkit' },        // ← 3
  { name: 'Mobile Chrome' }, // ← 4
  { name: 'Mobile Safari' }, // ← 5
]
```

#### 影響:

- 全テストが5つのブラウザで実行される
- テスト数 = 37,000パス × 5ブラウザ = **185,000テスト** 🔥
- メモリ使用量も5倍に

### 3. **並列実行によるメモリ圧迫**

```typescript
fullyParallel: true,
workers: process.env.CI ? 1 : undefined,  // CI以外は無制限
```

#### 影響:

- CI環境以外では並列数が無制限
- 複数のブラウザインスタンスが同時起動
- メモリ使用量が急増

## 📊 実測結果

### テスト実行時のエラー:

```
FATAL ERROR: Ineffective mark-compacts near heap limit
Allocation failed - JavaScript heap out of memory
```

- `getAllStoryPaths()` の計算だけでメモリ不足
- Node.jsのヒープ制限（デフォルト2GB程度）を超過

## 💡 推奨される修正

### 【最優先】story-integrity.spec.ts の修正

**問題のコード（109-180行目）を削除または無効化:**

```typescript
// ❌ 削除または無効化
test.describe('全てのストーリーパスのE2Eテスト', () => {
  const paths = getAllStoryPaths();
  // ...
});
```

**代替案:**

```typescript
// ✅ 軽量な統計テストに変更
test('ストーリーパスが存在することを確認', () => {
  const { storyData } = require('@/data/story');
  // startシーンから少なくとも1つのパスが存在することを確認
  expect(storyData.start).toBeDefined();
  expect(storyData.start.choices.length).toBeGreaterThan(0);
});
```

### playwright.config.ts の最適化

```typescript
// ❌ 削除: 不要なブラウザプロジェクト
projects: [
  { name: 'chromium' },  // ← これだけ残す
  // { name: 'firefox' },    // コメントアウト
  // { name: 'webkit' },     // コメントアウト
  // { name: 'Mobile Chrome' },  // コメントアウト
  // { name: 'Mobile Safari' },  // コメントアウト
],

// ✅ workersを制限
workers: 1,  // 並列数を1に固定
```

### 軽量な検証スクリプトの活用

既存の軽量スクリプトを優先的に使用:

```bash
# 全検証を高速実行（1秒未満）
./check-story-all.sh

# 個別実行
node check-single-choice.js       # 分岐点チェック
node check-invalid-references.js  # 参照整合性チェック
```

## 📈 修正後の期待される改善

| 項目 | 修正前 | 修正後 |
|------|--------|--------|
| 推定テスト数 | 185,000以上 | ~20 |
| ブラウザ数 | 5 | 1 |
| 並列実行数 | 無制限 | 1 |
| 実行時間 | タイムアウト/クラッシュ | 数分 |
| メモリ使用量 | >2GB（クラッシュ） | ~500MB |

## 🎯 結論

**Playwrightテストの失敗原因:**

1. ✅ **組み合わせ爆発**: 37,000以上のストーリーパスを全テスト
2. ✅ **メモリ不足**: Node.jsのヒープ制限を超過
3. ✅ **過剰なブラウザ数**: 5つのブラウザで実行
4. ✅ **無制限の並列実行**: メモリ圧迫

**推奨される対応:**

- **最優先**: story-integrity.spec.ts の全パステストを削除
- **重要**: chromiumのみでテスト実行
- **推奨**: 軽量な検証スクリプト（check-*.js）を活用

## 📝 参考コマンド

```bash
# 問題の分析
node analyze-simple.js

# 軽量な検証（推奨）
./check-story-all.sh

# Playwrightテスト（修正後のみ）
npx playwright test --project=chromium
```
