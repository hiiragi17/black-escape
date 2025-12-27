import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const StoryNode = memo(({ data }: NodeProps) => {
  const getNodeStyle = () => {
    if (data.isGoodEnding) {
      return 'bg-gradient-to-br from-green-400 to-green-600 border-green-700';
    }
    if (data.isBadEnding) {
      return 'bg-gradient-to-br from-red-400 to-red-600 border-red-700';
    }
    if (data.label === 'start') {
      return 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-700';
    }
    return 'bg-gradient-to-br from-gray-600 to-gray-800 border-gray-700';
  };

  const getIcon = () => {
    if (data.isGoodEnding) return '✨';
    if (data.isBadEnding) return '💀';
    if (data.label === 'start') return '🏢';
    return data.choices?.length > 1 ? '🔀' : '📍';
  };

  return (
    <div
      className={`px-4 py-3 shadow-lg rounded-lg border-2 ${getNodeStyle()} text-white min-w-[200px] max-w-[250px] transition-all hover:scale-105 hover:shadow-xl`}
    >
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-white" />

      <div className="flex items-start gap-2">
        <span className="text-xl flex-shrink-0">{getIcon()}</span>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm mb-1 break-words line-clamp-2">
            {data.label}
          </div>
          {data.preview && (
            <div className="text-xs opacity-80 break-words line-clamp-2">
              {data.preview}
            </div>
          )}
        </div>
      </div>

      {data.choices && data.choices.length > 0 && (
        <div className="mt-2 text-xs opacity-70">
          選択肢: {data.choices.length}個
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-white" />
    </div>
  );
});

StoryNode.displayName = 'StoryNode';

export default StoryNode;
