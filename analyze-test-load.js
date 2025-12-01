// Playwrightテストの負荷を分析するスクリプト
const fs = require('fs');
const path = require('path');

// story.tsファイルを読み込む
const storyFilePath = path.join(__dirname, 'src', 'data', 'story.ts');
const storyContent = fs.readFileSync(storyFilePath, 'utf-8');

// 全てのシーン名を抽出
const allScenes = new Set();
const sceneNamePattern = /"(\w+)":\s*\{/g;
let match;

while ((match = sceneNamePattern.exec(storyContent)) !== null) {
  allScenes.add(match[1]);
}

// 全てのストーリーパスを計算
function getAllStoryPaths() {
  const paths = [];
  const visited = new Set();

  function explorePath(currentScene, currentPath) {
    // 循環参照チェック
    if (currentPath.includes(currentScene)) {
      return;
    }

    const newPath = [...currentPath, currentScene];

    // このシーンの選択肢を取得
    const scenePattern = new RegExp(`"${currentScene}":\\s*\\{[^}]*?"choices":\\s*\\[([^\\]]*)\\]`, 's');
    const sceneMatch = scenePattern.exec(storyContent);

    if (!sceneMatch) {
      return;
    }

    const choicesStr = sceneMatch[1];
    const choicePattern = /"next":\s*"(\w+)"/g;
    const nextScenes = [];
    let choiceMatch;

    while ((choiceMatch = choicePattern.exec(choicesStr)) !== null) {
      nextScenes.push(choiceMatch[1]);
    }

    // エンディングに到達した場合
    if (nextScenes.length === 0) {
      paths.push({
        path: newPath,
        ending: currentScene,
        length: newPath.length
      });
      return;
    }

    // 各選択肢を探索
    for (const nextScene of nextScenes) {
      if (allScenes.has(nextScene)) {
        explorePath(nextScene, newPath);
      }
    }
  }

  explorePath('start', []);
  return paths;
}

const paths = getAllStoryPaths();

console.log('=== Playwrightテスト負荷分析 ===\n');

// Playwright設定を読み込む
const playwrightConfigPath = path.join(__dirname, 'playwright.config.ts');
const playwrightConfig = fs.readFileSync(playwrightConfigPath, 'utf-8');

// プロジェクト数を数える
const projectMatches = playwrightConfig.match(/name:\s*'([^']+)'/g) || [];
const projects = projectMatches.map(m => m.match(/'([^']+)'/)[1]);

console.log('📊 テスト実行の統計:\n');
console.log(`総シーン数: ${allScenes.size}`);
console.log(`総ストーリーパス数: ${paths.length}`);
console.log(`最短パス長: ${Math.min(...paths.map(p => p.length))}`);
console.log(`最長パス長: ${Math.max(...paths.map(p => p.length))}`);
console.log(`平均パス長: ${(paths.reduce((sum, p) => sum + p.length, 0) / paths.length).toFixed(2)}`);
console.log();

console.log('🔧 Playwright設定:\n');
console.log(`テストプロジェクト数: ${projects.length}`);
projects.forEach(p => console.log(`  - ${p}`));
console.log();

console.log('⚠️  推定テスト実行数:\n');

// story-integrity.spec.tsのテスト数を計算
const integrityTests = 6; // 固定テスト数（validateStoryData, invalidReferences, unreachableScenes, etc.）
const pathTests = paths.length; // 各パスごとのテスト
const totalTestsPerProject = integrityTests + pathTests;
const totalTests = totalTestsPerProject * projects.length;

console.log(`story-integrity.spec.ts:`);
console.log(`  - 固定テスト: ${integrityTests}`);
console.log(`  - パステスト: ${pathTests}`);
console.log(`  - 1プロジェクトあたり: ${totalTestsPerProject} テスト`);
console.log(`  - 全プロジェクト: ${totalTests} テスト`);
console.log();

// story-flow.spec.tsのテスト数
const flowTests = 8; // 固定テスト数
console.log(`story-flow.spec.ts:`);
console.log(`  - 固定テスト: ${flowTests}`);
console.log(`  - 全プロジェクト: ${flowTests * projects.length} テスト`);
console.log();

console.log(`📈 総テスト実行数: ${totalTests + (flowTests * projects.length)} テスト\n`);

// メモリ使用量の推定
const avgMemoryPerTest = 50; // MB（推定）
const estimatedMemory = (totalTests + (flowTests * projects.length)) * avgMemoryPerTest;

console.log('💾 推定メモリ使用量:\n');
console.log(`  - テストあたり: ~${avgMemoryPerTest}MB（推定）`);
console.log(`  - 総使用量: ~${(estimatedMemory / 1024).toFixed(2)}GB\n`);

// 問題点の指摘
console.log('❌ 検出された問題:\n');

const issues = [];

if (paths.length > 50) {
  issues.push(`⚠️  ストーリーパス数が多すぎます (${paths.length}個)`);
  issues.push(`   → 各パスごとにE2Eテストが生成され、メモリ不足の原因になります`);
}

if (projects.length > 2) {
  issues.push(`⚠️  テストプロジェクトが多すぎます (${projects.length}個)`);
  issues.push(`   → すべてのブラウザでテストを実行するため、実行時間とメモリが増大します`);
}

if (totalTests > 100) {
  issues.push(`⚠️  総テスト数が多すぎます (${totalTests}個)`);
  issues.push(`   → メモリ不足でテストが失敗する可能性が高いです`);
}

if (issues.length > 0) {
  issues.forEach(issue => console.log(issue));
} else {
  console.log('✅ 特に問題は検出されませんでした');
}

console.log('\n💡 推奨される対策:\n');
console.log('1. テストプロジェクトをchromiumのみに制限');
console.log('2. ストーリーパステストを一部のパスのみに限定');
console.log('3. テストを複数のファイルに分割');
console.log('4. workers設定を1に制限してメモリ使用量を削減');
console.log('5. 軽量な検証スクリプト（check-*.js）を優先的に使用\n');
