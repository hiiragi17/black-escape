'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import StoryNode from '@/components/StoryNode';
import {
  analyzeStoryData,
  convertToReactFlowElements,
  getLayoutedElements,
  calculateStatistics,
  findPathToEnding,
  getEndingsList,
} from '@/lib/storyGraphUtils';
import Link from 'next/link';

const nodeTypes = {
  default: StoryNode,
  start: StoryNode,
  goodEnding: StoryNode,
  badEnding: StoryNode,
};

export default function StoryVisualizerPage() {
  const router = useRouter();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'goodEnding' | 'badEnding'>('all');
  const [highlightedPath, setHighlightedPath] = useState<string[]>([]);

  // 本番環境ではアクセス不可
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/');
    }
  }, [router]);

  // ストーリーデータを解析
  const storyNodes = useMemo(() => analyzeStoryData(), []);
  const statistics = useMemo(() => calculateStatistics(storyNodes), [storyNodes]);
  const endingsList = useMemo(() => getEndingsList(storyNodes), [storyNodes]);

  // React Flowの要素を生成
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const elements = convertToReactFlowElements(storyNodes);
    return getLayoutedElements(elements.nodes, elements.edges);
  }, [storyNodes]);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // エンディングへのルートを表示
  const handleShowPath = useCallback((endingId: string) => {
    const path = findPathToEnding(storyNodes, endingId);
    if (path) {
      setHighlightedPath(path);
      // 検索とフィルターをリセット
      setSearchQuery('');
      setFilterType('all');
    }
  }, [storyNodes]);

  // ハイライトをクリア
  const handleClearPath = useCallback(() => {
    setHighlightedPath([]);
  }, []);

  // フィルタリングとハイライト
  const filteredElements = useMemo(() => {
    let filteredNodes = nodes;
    let filteredEdges = edges;

    // ハイライトパスがある場合
    if (highlightedPath.length > 0) {
      const pathSet = new Set(highlightedPath);

      // ノードをハイライト
      filteredNodes = nodes.map((node) => ({
        ...node,
        style: pathSet.has(node.id)
          ? {
              ...node.style,
              opacity: 1,
              boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.8)',
              border: '3px solid #3b82f6',
            }
          : { ...node.style, opacity: 0.2 },
      }));

      // エッジをハイライト
      const pathEdges = new Set<string>();
      for (let i = 0; i < highlightedPath.length - 1; i++) {
        pathEdges.add(`${highlightedPath[i]}-${highlightedPath[i + 1]}`);
      }

      filteredEdges = edges.map((edge) => ({
        ...edge,
        animated: pathEdges.has(edge.id),
        style: pathEdges.has(edge.id)
          ? {
              ...edge.style,
              stroke: '#3b82f6',
              strokeWidth: 3,
            }
          : { ...edge.style, opacity: 0.1 },
      }));
    } else {
      // タイプフィルター
      if (filterType !== 'all') {
        filteredNodes = nodes.filter(
          (node) => node.type === filterType || node.id === 'start'
        );
        const nodeIds = new Set(filteredNodes.map((n) => n.id));
        filteredEdges = edges.filter(
          (edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target)
        );
      }

      // 検索フィルター
      if (searchQuery) {
        filteredNodes = filteredNodes.filter((node) =>
          node.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.data.label?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          node.data.preview?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const nodeIds = new Set(filteredNodes.map((n) => n.id));
        filteredEdges = filteredEdges.filter(
          (edge) => nodeIds.has(edge.source) && nodeIds.has(edge.target)
        );
      }
    }

    return { nodes: filteredNodes, edges: filteredEdges };
  }, [nodes, edges, filterType, searchQuery, highlightedPath]);

  // ノードクリック
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  // 詳細パネルを閉じる
  const closeDetailPanel = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900">
      {/* ヘッダー */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← トップに戻る
          </Link>
          <h1 className="text-2xl font-bold text-white">
            ストーリービジュアライザー
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-300">
            シーン: {statistics.totalScenes} |
            グッドエンド: <span className="text-green-400">{statistics.goodEndings}</span> |
            バッドエンド: <span className="text-red-400">{statistics.badEndings}</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 flex relative">
        {/* React Flowキャンバス */}
        <div className="flex-1">
          <ReactFlow
            nodes={filteredElements.nodes}
            edges={filteredElements.edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
            className="bg-gray-900"
          >
            <Background color="#374151" gap={16} />
            <Controls className="bg-gray-800 border-gray-700" />
            <MiniMap
              nodeColor={(node) => {
                if (node.type === 'goodEnding') return '#4ade80';
                if (node.type === 'badEnding') return '#f87171';
                if (node.type === 'start') return '#60a5fa';
                return '#6b7280';
              }}
              className="bg-gray-800 border-gray-700"
            />

            {/* コントロールパネル */}
            <Panel position="top-left" className="bg-gray-800 rounded-lg shadow-lg p-4 space-y-3">
              {/* 検索 */}
              <div>
                <input
                  type="text"
                  placeholder="シーンを検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* フィルター */}
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    filterType === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  すべて
                </button>
                <button
                  onClick={() => setFilterType('goodEnding')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    filterType === 'goodEnding'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  グッドエンド
                </button>
                <button
                  onClick={() => setFilterType('badEnding')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    filterType === 'badEnding'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  バッドエンド
                </button>
              </div>

              {/* 凡例 */}
              <div className="pt-2 border-t border-gray-700 space-y-1 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-500"></div>
                  <span>スタート</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-500"></div>
                  <span>グッドエンド</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500"></div>
                  <span>バッドエンド</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-600"></div>
                  <span>通常シーン</span>
                </div>
              </div>
            </Panel>

            {/* エンディングへのルート表示パネル */}
            <Panel position="top-right" className="bg-gray-800 rounded-lg shadow-lg p-4 w-80 max-h-96 overflow-y-auto">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-white font-bold text-sm">エンディングへのルート</h3>
                {highlightedPath.length > 0 && (
                  <button
                    onClick={handleClearPath}
                    className="text-xs px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                  >
                    クリア
                  </button>
                )}
              </div>

              {highlightedPath.length > 0 && (
                <div className="mb-3 p-2 bg-blue-900/30 border border-blue-500/50 rounded text-xs text-blue-200">
                  {highlightedPath.length}シーンのルートを表示中
                </div>
              )}

              <div className="space-y-2">
                {/* グッドエンド */}
                <div>
                  <div className="text-green-400 text-xs font-bold mb-1">グッドエンド</div>
                  {endingsList.filter(e => e.type === 'good').map((ending) => (
                    <button
                      key={ending.id}
                      onClick={() => handleShowPath(ending.id)}
                      className="w-full text-left px-2 py-1.5 mb-1 bg-green-900/30 hover:bg-green-800/50 border border-green-600/30 hover:border-green-500/50 rounded text-xs text-green-100 transition-colors"
                    >
                      ✨ {ending.name}
                    </button>
                  ))}
                </div>

                {/* バッドエンド */}
                <div>
                  <div className="text-red-400 text-xs font-bold mb-1">バッドエンド</div>
                  <div className="space-y-1 max-h-48 overflow-y-auto">
                    {endingsList.filter(e => e.type === 'bad').map((ending) => (
                      <button
                        key={ending.id}
                        onClick={() => handleShowPath(ending.id)}
                        className="w-full text-left px-2 py-1.5 bg-red-900/30 hover:bg-red-800/50 border border-red-600/30 hover:border-red-500/50 rounded text-xs text-red-100 transition-colors"
                      >
                        💀 {ending.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </ReactFlow>
        </div>

        {/* 詳細パネル */}
        {selectedNode && (
          <div className="w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-white">シーン詳細</h2>
                <button
                  onClick={closeDetailPanel}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* シーンID */}
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">シーンID</div>
                <div className="text-white font-mono text-sm bg-gray-900 px-3 py-2 rounded">
                  {selectedNode.id}
                </div>
              </div>

              {/* タイプ */}
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">タイプ</div>
                <div className="flex gap-2">
                  {selectedNode.data.isGoodEnding && (
                    <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">
                      グッドエンド
                    </span>
                  )}
                  {selectedNode.data.isBadEnding && (
                    <span className="px-2 py-1 bg-red-600 text-white text-xs rounded">
                      バッドエンド
                    </span>
                  )}
                  {selectedNode.id === 'start' && (
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      スタート
                    </span>
                  )}
                  {!selectedNode.data.isEnding && selectedNode.id !== 'start' && (
                    <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded">
                      通常シーン
                    </span>
                  )}
                </div>
              </div>

              {/* テキスト */}
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">テキスト</div>
                <div className="text-white text-sm bg-gray-900 px-3 py-2 rounded whitespace-pre-wrap max-h-64 overflow-y-auto">
                  {selectedNode.data.fullText}
                </div>
              </div>

              {/* 選択肢 */}
              {selectedNode.data.choices && selectedNode.data.choices.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">
                    選択肢 ({selectedNode.data.choices.length}個)
                  </div>
                  <div className="space-y-2">
                    {selectedNode.data.choices.map((choice: { text: string; next: string }, index: number) => (
                      <div
                        key={index}
                        className="bg-gray-900 px-3 py-2 rounded text-sm"
                      >
                        <div className="text-blue-400 mb-1">
                          {String.fromCharCode(65 + index)}. {choice.text}
                        </div>
                        <div className="text-gray-400 text-xs">
                          → {choice.next}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
