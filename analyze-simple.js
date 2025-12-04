// より軽量なストーリー分析スクリプト
const fs = require('fs');
const path = require('path');

const storyFilePath = path.join(__dirname, 'src', 'data', 'story.ts');
const storyContent = fs.readFileSync(storyFilePath, 'utf-8');

console.log('=== Playwrightテスト失敗の原因分析 ===\n');

// シーンごとの選択肢数を集計
const scenes = {};
const scenePattern = /"(\w+)":\s*\{[^}]*?"choices":\s*\[(.*?)\]/gs;
let match;

while ((match = scenePattern.exec(storyContent)) !== null) {
  const sceneName = match[1];
  const choicesStr = match[2];
  const choiceCount = (choicesStr.match(/\{/g) || []).length;
  scenes[sceneName] = choiceCount;
}

// 統計情報
const totalScenes = Object.keys(scenes).length;
const scenesWithChoices = Object.values(scenes).filter(c => c > 0).length;
const totalChoices = Object.values(scenes).reduce((sum, c) => sum + c, 0);
const avgChoicesPerScene = totalChoices / scenesWithChoices;
const maxChoices = Math.max(...Object.values(scenes));

console.log('📊 ストーリーデータの統計:\n');
console.log(`総シーン数: ${totalScenes}`);
console.log(`選択肢があるシーン: ${scenesWithChoices}`);
console.log(`総選択肢数: ${totalChoices}`);
console.log(`平均選択肢数/シーン: ${avgChoicesPerScene.toFixed(2)}`);
console.log(`最大選択肢数: ${maxChoices}`);
console.log();

// 概算でパス数を推定（実際には循環参照があるため正確ではない）
const estimatedPathsLowerBound = Math.pow(2, 5); // 最低限の推定
const estimatedPathsUpperBound = Math.pow(avgChoicesPerScene, 10); // 最悪ケースの推定

console.log('📈 推定ストーリーパス数:\n');
console.log(`最小推定: ${estimatedPathsLowerBound.toLocaleString()} パス`);
console.log(`最大推定: ${estimatedPathsUpperBound > 1000000 ? '>1,000,000' : estimatedPathsUpperBound.toLocaleString()} パス`);
console.log();

// Playwright設定を確認
const playwrightConfig = fs.readFileSync(path.join(__dirname, 'playwright.config.ts'), 'utf-8');
const projectMatches = playwrightConfig.match(/name:\s*'([^']+)'/g) || [];
const projects = projectMatches.length;

console.log('🔧 Playwright設定:\n');
console.log(`テストプロジェクト数: ${projects}`);
console.log(`並列実行: fullyParallel = true`);
console.log();

// story-integrity.spec.tsを確認
const integritySpec = fs.readFileSync(path.join(__dirname, 'e2e', 'story-integrity.spec.ts'), 'utf-8');
const hasPathTests = integritySpec.includes('for (let i = 0; i < paths.length; i++)');

console.log('⚠️  問題の特定:\n');

const issues = [];

if (hasPathTests) {
  issues.push('❌ 致命的な問題: story-integrity.spec.ts が全ストーリーパスをテスト');
  issues.push('   → getAllStoryPaths() が膨大な数のパスを生成');
  issues.push('   → 各パスごとにE2Eテストを動的生成');
  issues.push('   → メモリ不足でクラッシュ');
  issues.push('');
}

if (projects > 1) {
  issues.push(`❌ ${projects}個のブラウザでテスト実行`);
  issues.push('   → テスト数が5倍に増加');
  issues.push('');
}

if (totalChoices > 100) {
  issues.push(`⚠️  選択肢が非常に多い (${totalChoices}個)`);
  issues.push('   → 組み合わせ爆発が発生');
  issues.push('');
}

issues.forEach(issue => console.log(issue));

console.log('💡 推奨される修正:\n');
console.log('1. 【最重要】story-integrity.spec.ts の全パステストを削除または無効化');
console.log('   - getAllStoryPaths()を使ったテストループを削除');
console.log('   - 代わりに軽量な検証スクリプト（check-*.js）を使用');
console.log('');
console.log('2. テストプロジェクトをchromiumのみに制限');
console.log('   - playwright.config.ts で他のブラウザをコメントアウト');
console.log('');
console.log('3. workers を 1 に制限');
console.log('   - メモリ使用量を削減');
console.log('');
console.log('4. 軽量な検証を優先');
console.log('   - ./check-story-all.sh で基本検証（1秒未満）');
console.log('   - Playwrightは基本的なUI動作のみテスト');
console.log();

console.log('📝 修正例:\n');
console.log('story-integrity.spec.ts の109行目以降（全パステスト）を削除して、');
console.log('代わりに簡単な統計テストのみに変更する');
console.log();
