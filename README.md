# ブラック企業からの脱出

インタラクティブなノベルゲーム。プレイヤーはブラック企業で働く主人公として、様々な選択を通じて自分の運命を切り開いていきます。

## 特徴

- 🎮 **113のシーン**と**31のエンディング**
- 🌳 **3つのグッドエンド**と**28のバッドエンド**
- 💼 転職、労働組合結成、弁護士相談など、多様なルート
- 🎨 タイピングアニメーションによる没入感のある体験
- 📱 モバイル対応のレスポンシブデザイン

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてゲームをプレイできます。

## 開発用コマンド

### ビルド

```bash
npm run build
npm start
```

### E2Eテスト

```bash
# ヘッドレスモードでテスト実行
npm run test:e2e

# UIモードでテスト実行
npm run test:e2e:ui

# ブラウザを表示してテスト実行
npm run test:e2e:headed
```

### ストーリーフローチャート生成

ストーリーの全体像を可視化したフローチャートを生成できます：

```bash
npm run story:chart
```

生成されたフローチャートは `STORY_FLOW.md` に保存され、以下の情報が含まれます：

- 📊 **統計情報**: 総シーン数、到達可能シーン数、エンディング数
- 📝 **エンディング一覧**: グッドエンド/バッドエンドの完全リスト
- 🌳 **Mermaidフローチャート**: 全シーンと選択肢の視覚的な図
  - 🟦 青色: スタートシーン
  - 🟢 緑色: グッドエンド
  - 🔴 赤色: バッドエンド
  - ◇ ひし形: 分岐点

生成されたフローチャートはGitHubやVS Codeで直接表示できます。

## プロジェクト構成

```
black-escape/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # トップページ
│   │   ├── novel/        # ゲーム画面
│   │   └── settings/     # 設定画面
│   ├── components/       # Reactコンポーネント
│   │   ├── Scene.tsx     # シーン表示コンポーネント
│   │   ├── Background.tsx
│   │   └── Bgm.tsx
│   └── data/
│       └── story.ts      # ストーリーデータ
├── e2e/                  # E2Eテスト
│   ├── story-flow.spec.ts
│   └── story-integrity.spec.ts
├── scripts/              # 開発用スクリプト
│   └── generate-story-chart.ts
└── STORY_FLOW.md         # 自動生成されたフローチャート
```

## ストーリーデータの編集

ストーリーは `src/data/story.ts` で管理されています。各シーンは以下の構造を持ちます：

```typescript
{
  "scene_id": {
    "text": "シーンのテキスト",
    "background": "/images/bg/office.jpg",
    "bgm": "/bgm/n43.mp3",
    "choices": [
      { "text": "選択肢1", "next": "next_scene_1" },
      { "text": "選択肢2", "next": "next_scene_2" }
    ]
  }
}
```

エンディングは `choices` が空配列のシーンです。

## テスト

このプロジェクトには包括的なE2Eテストが含まれています：

- **story-flow.spec.ts**: UI動作のテスト
- **story-integrity.spec.ts**: ストーリーデータの整合性チェック
  - 存在しないシーンへの参照がないか
  - 到達不可能なシーンがないか
  - すべてのエンディングが存在するか

## 技術スタック

- **Next.js 15** - Reactフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Playwright** - E2Eテスト
- **Mermaid** - フローチャート生成

## ライセンス

MIT
