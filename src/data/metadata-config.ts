export interface EndingConfig {
  // メタデータ用
  title: string;
  description: string;
  
  // Xシェア用
  shareText: string;
  emoji: string;
  
  // UI表示用
  shareMessage: {
    icon: string;
    title: string;
    subtitle: string;
    color: string;
    bgColor: string;
    borderColor: string;
  };
}

export const endingConfig: Record<string, EndingConfig> = {
  'freedom-good': {
    // メタデータ
    title: '転職成功！ - ブラック企業からの脱出',
    description: '残業地獄から転職で脱出成功！✨ 新しい環境で働けることになりました💪',
    
    // Xシェア
    shareText: '残業地獄から転職で脱出成功！✨\n新しい環境で働けることになりました💪',
    emoji: '🌟',
    
    // UI表示
    shareMessage: {
      icon: '🌟',
      title: '誰かが転職で脱出成功しました！',
      subtitle: '残業地獄から見事に脱出したようです✨',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },
  'overwork-bad': {
    // メタデータ
    title: '過労で倒れました... - ブラック企業からの脱出',
    description: '過労で倒れてしまいました...💀 無理は禁物ですね。体調管理は大切だと学びました😢',
    
    // Xシェア
    shareText: '過労で倒れてしまいました...💀\n無理は禁物ですね。体調管理は大切だと学びました😢',
    emoji: '💀',
    
    // UI表示
    shareMessage: {
      icon: '💀',
      title: '誰かが過労で倒れてしまいました...',
      subtitle: '無理は禁物ですね...💔',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  }
};

// デフォルト設定
export const defaultConfig: EndingConfig = {
  title: 'ブラック企業からの脱出',
  description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
  shareText: 'ブラック企業からの脱出に挑戦しました！',
  emoji: '🎮',
  shareMessage: {
    icon: '🎮',
    title: '誰かがゲームに挑戦しました！',
    subtitle: 'どんな結末を迎えたのでしょうか？',
    color: 'text-blue-300',
    bgColor: 'from-blue-900/20 to-purple-900/20',
    borderColor: 'border-blue-500'
  }
};

// ヘルパー関数
export function getEndingConfig(route?: string, ending?: string): EndingConfig {
  if (!route || !ending) return defaultConfig;
  
  const key = `${route}-${ending}`;
  return endingConfig[key] || defaultConfig;
}

export function getEndingMetadata(route?: string, ending?: string) {
  return getEndingConfig(route, ending);
}