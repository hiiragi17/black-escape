// Story analysis script
import { storyData } from './src/data/story';

interface Issue {
  type: string;
  sceneId: string;
  description: string;
  suggestion?: string;
}

const issues: Issue[] = [];

// 1. 参照エラーチェック: 選択肢のnextが存在しないシーンを指している
function checkReferenceErrors() {
  const allSceneIds = Object.keys(storyData);

  for (const [sceneId, scene] of Object.entries(storyData)) {
    for (const choice of scene.choices) {
      if (!allSceneIds.includes(choice.next)) {
        issues.push({
          type: '参照エラー',
          sceneId: sceneId,
          description: `選択肢「${choice.text}」が存在しないシーン「${choice.next}」を指しています`,
          suggestion: `シーン「${choice.next}」を作成するか、別の有効なシーンIDに変更してください`
        });
      }
    }
  }
}

// 2. デッドエンドチェック: 選択肢が空なのにエンディング表示がない
function checkDeadEnds() {
  for (const [sceneId, scene] of Object.entries(storyData)) {
    if (scene.choices.length === 0) {
      const hasEnding = scene.text.includes('【グッドエンド') ||
                       scene.text.includes('【バッドエンド') ||
                       scene.text.includes('【エンド');

      if (!hasEnding) {
        issues.push({
          type: 'デッドエンド',
          sceneId: sceneId,
          description: `選択肢が空なのにエンディング表示がありません`,
          suggestion: `エンディングテキストを追加するか、選択肢を追加してください`
        });
      }
    }
  }
}

// 3. 到達不可能なシーンチェック
function checkUnreachableScenes() {
  const reachableScenes = new Set<string>();
  const visited = new Set<string>();

  function traverse(sceneId: string) {
    if (visited.has(sceneId)) return;
    visited.add(sceneId);
    reachableScenes.add(sceneId);

    const scene = storyData[sceneId];
    if (scene) {
      for (const choice of scene.choices) {
        if (storyData[choice.next]) {
          traverse(choice.next);
        }
      }
    }
  }

  traverse('start');

  const allSceneIds = Object.keys(storyData);
  for (const sceneId of allSceneIds) {
    if (!reachableScenes.has(sceneId)) {
      issues.push({
        type: '到達不可能なシーン',
        sceneId: sceneId,
        description: `startシーンから到達できないシーンです`,
        suggestion: `既存のシーンからこのシーンへのパスを追加するか、不要であれば削除してください`
      });
    }
  }
}

// 4. 論理的矛盾チェック: 選択肢テキストと遷移先の内容の不一致
function checkLogicalInconsistencies() {
  for (const [sceneId, scene] of Object.entries(storyData)) {
    for (const choice of scene.choices) {
      const nextScene = storyData[choice.next];
      if (!nextScene) continue;

      const choiceText = choice.text.toLowerCase();
      const nextText = nextScene.text.toLowerCase();

      // 前向きな選択肢がバッドエンドに繋がるケース
      const positiveKeywords = ['頑張', '改善', '相談', '助け', '協力', '弁護士', '労働組合'];
      const isPositive = positiveKeywords.some(kw => choiceText.includes(kw));
      const isBadEnd = nextText.includes('【バッドエンド');

      if (isPositive && isBadEnd) {
        issues.push({
          type: '論理的矛盾（疑わしい）',
          sceneId: sceneId,
          description: `前向きな選択肢「${choice.text}」がバッドエンド「${choice.next}」に繋がっています`,
          suggestion: `選択肢の文言を見直すか、遷移先を確認してください`
        });
      }

      // 転職活動を選んでいるのに諦めるエンドに繋がるケース
      if (choiceText.includes('転職') && choice.next === 'job_search_burnout') {
        // job_search_burnoutはバッドエンドなので、このルートは意図的な可能性が高い
        // ただし警告は出す
      }

      // 「断る」選択肢が「procrastinate」（先延ばし）に繋がるケース
      if ((choiceText.includes('断る') || choiceText.includes('無理です')) &&
          choice.next === 'procrastinate') {
        issues.push({
          type: '論理的矛盾（要確認）',
          sceneId: sceneId,
          description: `選択肢「${choice.text}」が「procrastinate」（先延ばし）シーンに繋がっていますが、論理的に合致しているか確認が必要です`,
          suggestion: `遷移先シーンの内容を確認し、選択肢の意図と一致しているか検証してください`
        });
      }
    }
  }
}

// 5. 選択肢の不自然さチェック
function checkUnnaturalChoices() {
  for (const [sceneId, scene] of Object.entries(storyData)) {
    // 全く同じ遷移先を持つ複数の選択肢がある場合
    const destinations = scene.choices.map(c => c.next);
    const uniqueDestinations = new Set(destinations);

    if (destinations.length > uniqueDestinations.size) {
      const duplicates = destinations.filter((item, index) => destinations.indexOf(item) !== index);
      const uniqueDuplicates = [...new Set(duplicates)];

      for (const dup of uniqueDuplicates) {
        const duplicateChoices = scene.choices.filter(c => c.next === dup);
        issues.push({
          type: '不自然な選択肢',
          sceneId: sceneId,
          description: `複数の選択肢が同じシーン「${dup}」に遷移しています: ${duplicateChoices.map(c => `「${c.text}」`).join(', ')}`,
          suggestion: `選択肢の意味が異なる場合は、遷移先を分けることを検討してください`
        });
      }
    }

    // 選択肢が1つしかない場合
    if (scene.choices.length === 1) {
      issues.push({
        type: '不自然な選択肢',
        sceneId: sceneId,
        description: `選択肢が1つしかありません: 「${scene.choices[0].text}」`,
        suggestion: `選択の余地がない場合は自動遷移を検討するか、別の選択肢を追加してください`
      });
    }
  }
}

// 6. 特定の不自然なルートチェック
function checkSpecificIssues() {
  // "お互い頑張ろうな" という前向きな選択肢が work_alone_suffer (バッドエンド) に繋がっているケース
  const listenSilently = storyData['listen_silently_to_lecture'];
  if (listenSilently) {
    const choice = listenSilently.choices.find(c => c.text.includes('お互い頑張ろうな'));
    if (choice && choice.next === 'work_alone_suffer') {
      issues.push({
        type: '論理的矛盾',
        sceneId: 'listen_silently_to_lecture',
        description: `選択肢「お互い頑張ろうな」が孤独に働いて苦しむシーン「work_alone_suffer」に繋がっています`,
        suggestion: `選択肢のテキストを「我慢して働き続ける」などネガティブな表現に変更するか、遷移先を変更してください`
      });
    }
  }
}

// 分析実行
checkReferenceErrors();
checkDeadEnds();
checkUnreachableScenes();
checkLogicalInconsistencies();
checkUnnaturalChoices();
checkSpecificIssues();

// 結果をカテゴリ別に整理
const issuesByType = issues.reduce((acc, issue) => {
  if (!acc[issue.type]) {
    acc[issue.type] = [];
  }
  acc[issue.type].push(issue);
  return acc;
}, {} as Record<string, Issue[]>);

// 結果出力
console.log('='.repeat(80));
console.log('ストーリー分析レポート');
console.log('='.repeat(80));
console.log(`\n総問題数: ${issues.length}件\n`);

for (const [type, typeIssues] of Object.entries(issuesByType)) {
  console.log('-'.repeat(80));
  console.log(`■ ${type} (${typeIssues.length}件)`);
  console.log('-'.repeat(80));

  for (const issue of typeIssues) {
    console.log(`\n【シーンID】${issue.sceneId}`);
    console.log(`【問題内容】${issue.description}`);
    if (issue.suggestion) {
      console.log(`【推奨案】${issue.suggestion}`);
    }
  }
  console.log('');
}

console.log('='.repeat(80));
console.log('分析完了');
console.log('='.repeat(80));
