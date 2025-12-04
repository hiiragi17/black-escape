#!/bin/bash
# ストーリーデータの完全性を検証する統合スクリプト

echo "======================================"
echo "  ストーリーデータ完全性チェック"
echo "======================================"
echo ""

# カラーコード
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0

# 1. 分岐点チェック
echo "📋 [1/3] 分岐点チェック..."
if node check-single-choice.js > /dev/null 2>&1; then
  echo -e "${GREEN}✅ 分岐点チェック: 合格${NC}"
else
  echo -e "${RED}❌ 分岐点チェック: 失敗${NC}"
  node check-single-choice.js
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 2. 参照整合性チェック
echo "🔗 [2/3] 参照整合性チェック..."
if node check-invalid-references.js > /dev/null 2>&1; then
  echo -e "${GREEN}✅ 参照整合性チェック: 合格${NC}"
else
  echo -e "${RED}❌ 参照整合性チェック: 失敗${NC}"
  node check-invalid-references.js
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. TypeScript型チェック
echo "📝 [3/3] TypeScript型チェック..."
if npx tsc --noEmit src/data/story.ts > /dev/null 2>&1; then
  echo -e "${GREEN}✅ TypeScript型チェック: 合格${NC}"
else
  echo -e "${RED}❌ TypeScript型チェック: 失敗${NC}"
  npx tsc --noEmit src/data/story.ts
  ERRORS=$((ERRORS + 1))
fi
echo ""

# 結果サマリー
echo "======================================"
if [ $ERRORS -eq 0 ]; then
  echo -e "${GREEN}🎉 全てのチェックに合格しました！${NC}"
  echo ""
  echo "📊 詳細結果:"
  node check-single-choice.js | grep -E "(総シーン数|複数の選択肢|選択肢が1つ|エンディング)"
  echo ""
  node check-invalid-references.js | grep -E "(総シーン数|総参照数|無効な参照)"
  exit 0
else
  echo -e "${RED}❌ $ERRORS 個のチェックが失敗しました${NC}"
  exit 1
fi
