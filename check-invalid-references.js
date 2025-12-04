// 存在しないシーンへの参照をチェックするスクリプト
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

console.log(`=== シーン参照チェック結果 ===\n`);
console.log(`📊 総シーン数: ${allScenes.size}\n`);

// 各選択肢の next を抽出
const choicePattern = /"next":\s*"(\w+)"/g;
const references = [];
const invalidReferences = [];

let choiceMatch;
while ((choiceMatch = choicePattern.exec(storyContent)) !== null) {
  const nextScene = choiceMatch[1];
  references.push(nextScene);

  if (!allScenes.has(nextScene)) {
    invalidReferences.push(nextScene);
  }
}

console.log(`🔗 総参照数: ${references.length}`);
console.log(`❌ 無効な参照数: ${invalidReferences.length}\n`);

if (invalidReferences.length > 0) {
  console.log('❌ 存在しないシーンへの参照:');
  const uniqueInvalid = [...new Set(invalidReferences)];
  uniqueInvalid.forEach(ref => {
    console.log(`   - "${ref}" (シーンが存在しません)`);
  });
  console.log();
  process.exit(1);
} else {
  console.log('✅ 全ての選択肢が有効なシーンに繋がっています！\n');

  // ボーナス情報: 到達不可能なシーンを検出
  const reachableScenes = new Set(['start']);
  const queue = ['start'];

  while (queue.length > 0) {
    const current = queue.shift();

    // このシーンからの参照を探す
    const scenePattern = new RegExp(`"${current}":\\s*\\{[^}]*?"choices":\\s*\\[([^\\]]*)\\]`, 's');
    const sceneMatch = scenePattern.exec(storyContent);

    if (sceneMatch) {
      const choicesStr = sceneMatch[1];
      const nextPattern = /"next":\s*"(\w+)"/g;
      let nextMatch;

      while ((nextMatch = nextPattern.exec(choicesStr)) !== null) {
        const nextScene = nextMatch[1];
        if (!reachableScenes.has(nextScene)) {
          reachableScenes.add(nextScene);
          queue.push(nextScene);
        }
      }
    }
  }

  const unreachableScenes = [];
  for (const scene of allScenes) {
    if (!reachableScenes.has(scene)) {
      unreachableScenes.push(scene);
    }
  }

  if (unreachableScenes.length > 0) {
    console.log(`⚠️  到達不可能なシーン: ${unreachableScenes.length}個`);
    unreachableScenes.forEach(scene => {
      console.log(`   - ${scene}`);
    });
    console.log('\n注: これらのシーンはstartから辿り着けません。削除するか、既存のシーンから参照を追加してください。\n');
  } else {
    console.log('✅ 全てのシーンがstartから到達可能です！\n');
  }

  process.exit(0);
}
