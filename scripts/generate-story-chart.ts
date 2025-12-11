#!/usr/bin/env ts-node

import { storyData } from '../src/data/story';
import * as fs from 'fs';
import * as path from 'path';

interface SceneNode {
  id: string;
  text: string;
  choices: Array<{ text: string; next: string }>;
  isEnding: boolean;
  isGoodEnding: boolean;
  isBadEnding: boolean;
  textPreview: string;
}

/**
 * ストーリーデータを解析してノード情報を生成
 */
function analyzeStoryData(): Map<string, SceneNode> {
  const nodes = new Map<string, SceneNode>();

  for (const [sceneId, sceneData] of Object.entries(storyData)) {
    const isEnding = sceneData.choices.length === 0;
    const isGoodEnding = isEnding && sceneData.text.includes('【グッドエンド');
    const isBadEnding = isEnding && sceneData.text.includes('【バッドエンド');

    // テキストのプレビュー（最初の50文字）
    const textPreview = sceneData.text
      .replace(/\n/g, ' ')
      .slice(0, 50) + (sceneData.text.length > 50 ? '...' : '');

    nodes.set(sceneId, {
      id: sceneId,
      text: sceneData.text,
      choices: sceneData.choices,
      isEnding,
      isGoodEnding,
      isBadEnding,
      textPreview,
    });
  }

  return nodes;
}

/**
 * 到達可能なシーンを検出
 */
function findReachableScenes(nodes: Map<string, SceneNode>): Set<string> {
  const reachable = new Set<string>();
  const queue = ['start'];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (reachable.has(current)) continue;

    reachable.add(current);
    const node = nodes.get(current);

    if (node) {
      for (const choice of node.choices) {
        if (!reachable.has(choice.next)) {
          queue.push(choice.next);
        }
      }
    }
  }

  return reachable;
}

/**
 * Mermaidフローチャートを生成
 */
function generateMermaidChart(
  nodes: Map<string, SceneNode>,
  reachableScenes: Set<string>,
  options: {
    showUnreachable?: boolean;
    maxLabelLength?: number;
    showTextPreview?: boolean;
  } = {}
): string {
  const {
    showUnreachable = false,
    maxLabelLength = 20,
    showTextPreview = true,
  } = options;

  let mermaid = 'graph TD\n\n';
  mermaid += '  %% スタイル定義\n';
  mermaid += '  classDef goodEnding fill:#4ade80,stroke:#22c55e,stroke-width:3px,color:#000\n';
  mermaid += '  classDef badEnding fill:#f87171,stroke:#ef4444,stroke-width:3px,color:#000\n';
  mermaid += '  classDef unreachable fill:#9ca3af,stroke:#6b7280,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n';
  mermaid += '  classDef start fill:#60a5fa,stroke:#3b82f6,stroke-width:3px,color:#000\n\n';

  // ノードの定義
  for (const [sceneId, node] of nodes.entries()) {
    const isReachable = reachableScenes.has(sceneId);

    if (!isReachable && !showUnreachable) continue;

    let label = sceneId;

    if (showTextPreview && node.isEnding) {
      // エンディングの場合は、エンディング名を抽出
      const endingMatch = node.text.match(/【(グッド|バッド)エンド[：:]\s*([^】]+)】/);
      if (endingMatch) {
        label = endingMatch[2].slice(0, maxLabelLength);
      }
    } else if (showTextPreview) {
      label = node.textPreview.slice(0, maxLabelLength);
    }

    // ラベルの長さ調整
    if (label.length > maxLabelLength) {
      label = label.slice(0, maxLabelLength) + '...';
    }

    // エスケープ処理
    label = label.replace(/"/g, '#quot;');

    if (node.isEnding) {
      mermaid += `  ${sceneId}["${label}"]\n`;
    } else if (node.choices.length > 1) {
      mermaid += `  ${sceneId}{"${label}"}\n`;
    } else {
      mermaid += `  ${sceneId}["${label}"]\n`;
    }
  }

  mermaid += '\n  %% エッジの定義\n';

  // エッジの定義
  for (const [sceneId, node] of nodes.entries()) {
    const isReachable = reachableScenes.has(sceneId);

    if (!isReachable && !showUnreachable) continue;

    for (let i = 0; i < node.choices.length; i++) {
      const choice = node.choices[i];
      const choiceLabel = choice.text.slice(0, 15) + (choice.text.length > 15 ? '...' : '');
      const escapedLabel = choiceLabel.replace(/"/g, '#quot;');

      mermaid += `  ${sceneId} -->|"${escapedLabel}"| ${choice.next}\n`;
    }
  }

  mermaid += '\n  %% スタイルクラスの適用\n';
  mermaid += '  class start start\n';

  // グッドエンディング
  const goodEndings = Array.from(nodes.entries())
    .filter(([id, node]) => node.isGoodEnding && (reachableScenes.has(id) || showUnreachable))
    .map(([id]) => id);
  if (goodEndings.length > 0) {
    mermaid += `  class ${goodEndings.join(',')} goodEnding\n`;
  }

  // バッドエンディング
  const badEndings = Array.from(nodes.entries())
    .filter(([id, node]) => node.isBadEnding && (reachableScenes.has(id) || showUnreachable))
    .map(([id]) => id);
  if (badEndings.length > 0) {
    mermaid += `  class ${badEndings.join(',')} badEnding\n`;
  }

  // 到達不可能なシーン
  if (showUnreachable) {
    const unreachableScenes = Array.from(nodes.keys())
      .filter(id => !reachableScenes.has(id));
    if (unreachableScenes.length > 0) {
      mermaid += `  class ${unreachableScenes.join(',')} unreachable\n`;
    }
  }

  return mermaid;
}

/**
 * 統計情報を生成
 */
function generateStatistics(
  nodes: Map<string, SceneNode>,
  reachableScenes: Set<string>
): string {
  const totalScenes = nodes.size;
  const reachableCount = reachableScenes.size;
  const unreachableCount = totalScenes - reachableCount;

  const goodEndings = Array.from(nodes.values()).filter(n => n.isGoodEnding).length;
  const badEndings = Array.from(nodes.values()).filter(n => n.isBadEnding).length;
  const totalEndings = goodEndings + badEndings;

  const reachableGoodEndings = Array.from(nodes.entries())
    .filter(([id, node]) => node.isGoodEnding && reachableScenes.has(id))
    .length;
  const reachableBadEndings = Array.from(nodes.entries())
    .filter(([id, node]) => node.isBadEnding && reachableScenes.has(id))
    .length;

  let stats = '## ストーリー統計\n\n';
  stats += `- **総シーン数**: ${totalScenes}\n`;
  stats += `- **到達可能シーン数**: ${reachableCount}\n`;
  stats += `- **到達不可能シーン数**: ${unreachableCount}\n`;
  stats += `- **総エンディング数**: ${totalEndings}\n`;
  stats += `  - グッドエンド: ${goodEndings} (到達可能: ${reachableGoodEndings})\n`;
  stats += `  - バッドエンド: ${badEndings} (到達可能: ${reachableBadEndings})\n`;

  return stats;
}

/**
 * エンディング一覧を生成
 */
function generateEndingList(
  nodes: Map<string, SceneNode>,
  reachableScenes: Set<string>
): string {
  let list = '## エンディング一覧\n\n';

  list += '### グッドエンド\n\n';
  const goodEndings = Array.from(nodes.entries())
    .filter(([_, node]) => node.isGoodEnding)
    .sort((a, b) => a[0].localeCompare(b[0]));

  for (const [id, node] of goodEndings) {
    const isReachable = reachableScenes.has(id);
    const endingMatch = node.text.match(/【グッドエンド[：:]\s*([^】]+)】/);
    const endingName = endingMatch ? endingMatch[1] : id;
    const status = isReachable ? '✅' : '❌';
    list += `- ${status} **${endingName}** (\`${id}\`)\n`;
  }

  list += '\n### バッドエンド\n\n';
  const badEndings = Array.from(nodes.entries())
    .filter(([_, node]) => node.isBadEnding)
    .sort((a, b) => a[0].localeCompare(b[0]));

  for (const [id, node] of badEndings) {
    const isReachable = reachableScenes.has(id);
    const endingMatch = node.text.match(/【バッドエンド[：:]\s*([^】]+)】/);
    const endingName = endingMatch ? endingMatch[1] : id;
    const status = isReachable ? '✅' : '❌';
    list += `- ${status} **${endingName}** (\`${id}\`)\n`;
  }

  return list;
}

/**
 * メイン処理
 */
function main() {
  console.log('🔍 ストーリーデータを解析中...\n');

  const nodes = analyzeStoryData();
  const reachableScenes = findReachableScenes(nodes);

  console.log('📊 統計情報を生成中...\n');
  const statistics = generateStatistics(nodes, reachableScenes);
  console.log(statistics);

  console.log('\n📈 Mermaidフローチャートを生成中...\n');
  const mermaidChart = generateMermaidChart(nodes, reachableScenes, {
    showUnreachable: true,
    maxLabelLength: 20,
    showTextPreview: true,
  });

  console.log('📝 エンディング一覧を生成中...\n');
  const endingList = generateEndingList(nodes, reachableScenes);

  // Markdownファイルに出力
  const outputPath = path.join(__dirname, '..', 'STORY_FLOW.md');
  let markdown = '# ブラック企業からの脱出 - ストーリーフローチャート\n\n';
  markdown += '> このドキュメントは自動生成されています。\n';
  markdown += '> 生成コマンド: `npm run story:chart`\n\n';
  markdown += statistics + '\n';
  markdown += endingList + '\n';
  markdown += '## フローチャート\n\n';
  markdown += '```mermaid\n';
  markdown += mermaidChart;
  markdown += '```\n\n';
  markdown += '## 凡例\n\n';
  markdown += '- 🟦 **青色**: スタートシーン\n';
  markdown += '- 🟢 **緑色**: グッドエンド\n';
  markdown += '- 🔴 **赤色**: バッドエンド\n';
  markdown += '- ⚪ **灰色（点線）**: 到達不可能なシーン\n';
  markdown += '- ◇ **ひし形**: 分岐点（複数の選択肢）\n';
  markdown += '- ▭ **長方形**: 通常シーン\n';

  fs.writeFileSync(outputPath, markdown, 'utf-8');
  console.log(`✅ フローチャートを生成しました: ${outputPath}\n`);
  console.log('💡 GitHubやVS Codeで開くと、フローチャートが表示されます。\n');
}

main();
