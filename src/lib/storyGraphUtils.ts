import { Node, Edge } from 'reactflow';
import dagre from 'dagre';
import { storyData } from '@/data/story';

export interface StoryNode {
  id: string;
  text: string;
  choices: Array<{ text: string; next: string }>;
  isEnding: boolean;
  isGoodEnding: boolean;
  isBadEnding: boolean;
}

/**
 * ストーリーデータを解析してノード情報を生成
 */
export function analyzeStoryData(): Map<string, StoryNode> {
  const nodes = new Map<string, StoryNode>();

  for (const [sceneId, sceneData] of Object.entries(storyData)) {
    const isEnding = sceneData.choices.length === 0;
    const isGoodEnding = isEnding && sceneData.text.includes('【グッドエンド');
    const isBadEnding = isEnding && sceneData.text.includes('【バッドエンド');

    nodes.set(sceneId, {
      id: sceneId,
      text: sceneData.text,
      choices: sceneData.choices,
      isEnding,
      isGoodEnding,
      isBadEnding,
    });
  }

  return nodes;
}

/**
 * React Flowのノードとエッジを生成
 */
export function convertToReactFlowElements(storyNodes: Map<string, StoryNode>) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  for (const [sceneId, node] of storyNodes.entries()) {
    // ノードのラベルを生成
    let label = sceneId;
    if (node.isEnding) {
      const endingMatch = node.text.match(/【(グッド|バッド)エンド[：:]\s*([^】]+)】/);
      if (endingMatch) {
        label = endingMatch[2];
      }
    }

    // ノードのタイプを決定
    let nodeType = 'default';
    if (sceneId === 'start') nodeType = 'start';
    else if (node.isGoodEnding) nodeType = 'goodEnding';
    else if (node.isBadEnding) nodeType = 'badEnding';

    // テキストプレビュー
    const textPreview = node.text.replace(/\n/g, ' ').slice(0, 100);

    nodes.push({
      id: sceneId,
      data: {
        label,
        fullText: node.text,
        preview: textPreview,
        choices: node.choices,
        isEnding: node.isEnding,
        isGoodEnding: node.isGoodEnding,
        isBadEnding: node.isBadEnding,
      },
      position: { x: 0, y: 0 }, // レイアウト計算で後で更新
      type: nodeType,
    });

    // エッジを生成
    for (const choice of node.choices) {
      edges.push({
        id: `${sceneId}-${choice.next}`,
        source: sceneId,
        target: choice.next,
        label: choice.text.slice(0, 20) + (choice.text.length > 20 ? '...' : ''),
        animated: false,
      });
    }
  }

  return { nodes, edges };
}

/**
 * Dagreを使ってレイアウトを計算
 */
export function getLayoutedElements(nodes: Node[], edges: Edge[]) {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 250;
  const nodeHeight = 80;

  dagreGraph.setGraph({
    rankdir: 'TB',
    nodesep: 100,
    ranksep: 150,
    edgesep: 50,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}

/**
 * 統計情報を計算
 */
export function calculateStatistics(storyNodes: Map<string, StoryNode>) {
  const totalScenes = storyNodes.size;
  const goodEndings = Array.from(storyNodes.values()).filter(n => n.isGoodEnding).length;
  const badEndings = Array.from(storyNodes.values()).filter(n => n.isBadEnding).length;
  const totalEndings = goodEndings + badEndings;

  return {
    totalScenes,
    goodEndings,
    badEndings,
    totalEndings,
  };
}
