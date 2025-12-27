'use client';

import { useState, useMemo, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import StoryNode from '@/components/StoryNode';
import {
  analyzeStoryData,
  convertToReactFlowElements,
  getLayoutedElements,
  calculateStatistics,
} from '@/lib/storyGraphUtils';
import Link from 'next/link';

const nodeTypes = {
  default: StoryNode,
  start: StoryNode,
  goodEnding: StoryNode,
  badEnding: StoryNode,
};

export default function StoryVisualizerPage() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'goodEnding' | 'badEnding'>('all');

  // ストーリーデータを解析
  const storyNodes = useMemo(() => analyzeStoryData(), []);
  const statistics = useMemo(() => calculateStatistics(storyNodes), [storyNodes]);

  // React Flowの要素を生成
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const elements = convertToReactFlowElements(storyNodes);
    return getLayoutedElements(elements.nodes, elements.edges);
  }, [storyNodes]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // フィルタリング
  const filteredElements = useMemo(() => {
    let filteredNodes = nodes;
    let filteredEdges = edges;

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

    return { nodes: filteredNodes, edges: filteredEdges };
  }, [nodes, edges, filterType, searchQuery]);

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
                    {selectedNode.data.choices.map((choice: any, index: number) => (
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
