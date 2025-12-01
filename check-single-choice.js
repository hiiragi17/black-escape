// 選択肢が1つだけのシーンを検出するスクリプト
const fs = require('fs');
const path = require('path');

// story.tsファイルを読み込む
const storyFilePath = path.join(__dirname, 'src', 'data', 'story.ts');
const storyContent = fs.readFileSync(storyFilePath, 'utf-8');

// シーンごとに選択肢を解析
const scenes = {};

// シーン名とその選択肢を抽出
const scenePattern = /"(\w+)":\s*\{[^}]*?"choices":\s*\[(.*?)\]/gs;
let match;

while ((match = scenePattern.exec(storyContent)) !== null) {
  const sceneName = match[1];
  const choicesStr = match[2];

  // 選択肢の数を数える（{ で始まる数）
  const choiceCount = (choicesStr.match(/\{/g) || []).length;

  scenes[sceneName] = choiceCount;
}

// 結果を分類
const singleChoiceScenes = [];
const noChoiceScenes = [];
const multiChoiceScenes = [];

for (const [sceneName, choiceCount] of Object.entries(scenes)) {
  if (choiceCount === 0) {
    noChoiceScenes.push(sceneName);
  } else if (choiceCount === 1) {
    singleChoiceScenes.push(sceneName);
  } else {
    multiChoiceScenes.push(sceneName);
  }
}

// 結果を表示
console.log('=== 分岐点チェック結果 ===\n');
console.log(`📊 総シーン数: ${Object.keys(scenes).length}`);
console.log(`✅ 複数の選択肢があるシーン: ${multiChoiceScenes.length}`);
console.log(`⚠️  選択肢が1つだけのシーン（分岐点なし）: ${singleChoiceScenes.length}`);
console.log(`🏁 エンディング（選択肢なし）: ${noChoiceScenes.length}\n`);

if (singleChoiceScenes.length > 0) {
  console.log('⚠️  選択肢が1つだけのシーン一覧（プレイヤーに選択の余地がありません）:');
  singleChoiceScenes.forEach(scene => {
    console.log(`   - ${scene}`);
  });
  console.log();
}

if (noChoiceScenes.length > 0) {
  console.log('🏁 エンディングシーン一覧:');
  noChoiceScenes.forEach(scene => {
    console.log(`   - ${scene}`);
  });
}

// 問題がある場合は終了コード1を返す
if (singleChoiceScenes.length > 0) {
  console.log('\n❌ 分岐点がないシーンが見つかりました。各シーンには2つ以上の選択肢を用意することを推奨します。');
  process.exit(1);
} else {
  console.log('\n✅ 全てのシーンに適切な分岐点があります！');
  process.exit(0);
}
