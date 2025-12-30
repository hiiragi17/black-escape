// Detailed story analysis for specific issues
import { storyData } from './src/data/story';

console.log('='.repeat(80));
console.log('詳細な問題分析');
console.log('='.repeat(80));
console.log('');

// 問題1: listen_silently_to_lecture の矛盾
console.log('【重大な問題1】listen_silently_to_lecture シーンの矛盾');
console.log('-'.repeat(80));
const listenScene = storyData['listen_silently_to_lecture'];
const partingScene = storyData['parting_and_cry_then_jobhunt'];

console.log('選択肢1: 「お互い転職活動しようか」');
console.log('遷移先: parting_and_cry_then_jobhunt');
console.log('');
console.log('遷移先シーンの冒頭テキスト:');
console.log(partingScene.text.split('\n')[0]);
console.log('');
console.log('【問題点】選択肢では「お互い転職活動しようか」と言っているのに、');
console.log('遷移先シーンでは「お互い頑張ろうな」と言っています。');
console.log('これは選択肢のテキストとシーン内容が完全に食い違っています。');
console.log('');
console.log('【推奨修正案】');
console.log('1. parting_and_cry_then_jobhunt シーンの冒頭を以下に変更:');
console.log('   「お互い、転職活動しようか」');
console.log('');
console.log('2. または、選択肢のテキストを以下に変更:');
console.log('   「お互い頑張ろうな（と言って転職を決意）」');
console.log('');
console.log('');

// 問題2: receive_document_task から procrastinate への矛盾
console.log('【重大な問題2】receive_document_task → procrastinate の矛盾');
console.log('-'.repeat(80));
const receiveTask = storyData['receive_document_task'];
const procrastinate = storyData['procrastinate'];

console.log('選択肢: 「無理です」');
console.log('遷移先: procrastinate');
console.log('');
console.log('procrastinateシーンの内容:');
console.log('「転職活動は面倒だから、後回しにすることにした...」');
console.log('');
console.log('【問題点】部長に「無理です」と断る勇気を出したのに、');
console.log('なぜか「転職活動を先延ばしにする」シーンに繋がっています。');
console.log('これは選択肢の意図と遷移先の内容が矛盾しています。');
console.log('');
console.log('【推奨修正案】');
console.log('1. 新しいシーン「refuse_boss_task」を作成し、部長に断った結果');
console.log('   （パワハラ強化、降格など）の展開を追加');
console.log('');
console.log('2. または、選択肢を「今は無理ですが...後でやります（と先延ばし）」');
console.log('   のように変更して、procrastinateへの遷移を自然にする');
console.log('');
console.log('');

// 問題3: 前向きな選択肢がバッドエンドに繋がる問題
console.log('【問題3】前向きな選択肢が直接バッドエンドに繋がるケース');
console.log('-'.repeat(80));

const problematicPaths = [
  {
    scene: 'joint_job_hunting',
    choice: '転職エージェントに相談する',
    destination: 'job_search_burnout',
    issue: '転職エージェントに相談するという前向きな選択肢が、転職活動に疲弊するバッドエンドに直行'
  },
  {
    scene: 'consult_lawyer_first',
    choice: '安い弁護士を選ぶ',
    destination: 'incompetent_lawyer',
    issue: '選択肢に「安い」というネガティブな表現がないため、プレイヤーが罠だと気づきにくい'
  },
  {
    scene: 'union_preparation_meeting',
    choice: '会社に事前相談して認めてもらう',
    destination: 'union_crushed_early',
    issue: '一見合理的に見える選択肢が、実は最悪の選択になっている。ヒントがない'
  }
];

for (const path of problematicPaths) {
  console.log(`シーン: ${path.scene}`);
  console.log(`選択肢: 「${path.choice}」`);
  console.log(`遷移先: ${path.destination}`);
  console.log(`問題点: ${path.issue}`);
  console.log('');
  console.log('【推奨修正案】');
  console.log('選択肢のテキストに括弧書きでヒントを追加する例:');
  console.log(`「${path.choice}（リスクあり）」`);
  console.log('');
}

console.log('');

// 問題4: 選択肢が1つしかないシーン
console.log('【問題4】選択肢が1つしかないシーン（選択の余地なし）');
console.log('-'.repeat(80));

const singleChoiceScenes = [
  'recording_evidence_timing',
  'union_expansion_planning',
  'research_lawyers',
  'lawyer_strategy_meeting_rushed',
  'company_initial_response',
  'settlement_agreement_review',
  'lawyer_demand_full_amount',
  'continue_improved_company'
];

for (const sceneId of singleChoiceScenes) {
  const scene = storyData[sceneId];
  console.log(`シーン: ${sceneId}`);
  console.log(`選択肢: 「${scene.choices[0].text}」`);
  console.log('');
}

console.log('【推奨修正案】');
console.log('1. 自動遷移に変更（選択肢を削除してストーリーが自動的に進む）');
console.log('2. または、別の選択肢を追加してプレイヤーに選択の余地を与える');
console.log('');
console.log('');

// 問題5: moderate_improvement_ending がバッドエンドになっている問題
console.log('【問題5】「満足する」選択肢がバッドエンドになる問題');
console.log('-'.repeat(80));

const moderateEnd = storyData['moderate_improvement_ending'];
console.log('シーン: moderate_improvement_ending');
console.log('内容: ある程度の改善があったが、中途半端な妥協としてバッドエンド');
console.log('');
console.log('この結末に繋がる選択肢:');
console.log('- 「この改善で満足する」');
console.log('- 「この程度の改善で満足する」');
console.log('- 「この改善で満足して働き続ける」');
console.log('');
console.log('【問題点】');
console.log('プレイヤーは「満足する」という前向きな選択をしたのに、');
console.log('「後悔が残る」というバッドエンドになってしまいます。');
console.log('これは選択肢のテキストと結果が矛盾しています。');
console.log('');
console.log('【推奨修正案】');
console.log('1. 選択肢を「これくらいで妥協する」「これで諦める」などネガティブな表現に変更');
console.log('2. または、moderate_improvement_ending を中立的なエンド（ノーマルエンド）に変更');
console.log('3. または、「満足する」を選んだ場合は別の結末（小さな成功エンド）に遷移させる');
console.log('');

console.log('='.repeat(80));
console.log('分析完了');
console.log('='.repeat(80));
