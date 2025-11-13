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
  'independence-good': {
    // メタデータ
    title: '独立成功！ - ブラック企業からの脱出',
    description: 'フリーランスとして独立成功！🚀 自由な働き方を手に入れました✨',

    // Xシェア
    shareText: 'フリーランスとして独立成功！🚀\n自由な働き方を手に入れました✨',
    emoji: '🚀',

    // UI表示
    shareMessage: {
      icon: '🚀',
      title: '誰かが独立して成功しました！',
      subtitle: 'フリーランスとして自由を手に入れたようです✨',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },
  'reform-good': {
    // メタデータ
    title: '社内改革成功！ - ブラック企業からの脱出',
    description: '労働基準監督署に相談して会社を変えました！⚖️ 戦って勝ち取った勝利です💪',

    // Xシェア
    shareText: '労働基準監督署に相談して会社を変えました！⚖️\n戦って勝ち取った勝利です💪',
    emoji: '⚖️',

    // UI表示
    shareMessage: {
      icon: '⚖️',
      title: '誰かが社内改革に成功しました！',
      subtitle: '労基に相談して環境を改善したようです✨',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },
  'hasty-bad': {
    // メタデータ
    title: '転職失敗... - ブラック企業からの脱出',
    description: '焦って転職したら、もっと酷いブラック企業でした...😱 地獄から地獄へ...',

    // Xシェア
    shareText: '焦って転職したら、もっと酷いブラック企業でした...😱\n地獄から地獄へ...',
    emoji: '😱',

    // UI表示
    shareMessage: {
      icon: '😱',
      title: '誰かが転職に失敗しました...',
      subtitle: '新しい会社は前より酷かったようです',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },
  'survival-bad': {
    // メタデータ
    title: '孤立と絶望... - ブラック企業からの脱出',
    description: '手を抜いたら職場で孤立してしまいました...💔 心が壊れていきます',

    // Xシェア
    shareText: '手を抜いたら職場で孤立してしまいました...💔\n心が壊れていきます',
    emoji: '💔',

    // UI表示
    shareMessage: {
      icon: '💔',
      title: '誰かが職場で孤立してしまいました...',
      subtitle: '地獄のような環境に留まり続けているようです',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },
  'jobless-bad': {
    // メタデータ
    title: '無計画退職で困窮... - ブラック企業からの脱出',
    description: '無計画に辞めて貯金も底をつきました...😭 実家に戻るしかない',

    // Xシェア
    shareText: '無計画に辞めて貯金も底をつきました...😭\n実家に戻るしかない',
    emoji: '😭',

    // UI表示
    shareMessage: {
      icon: '😭',
      title: '誰かが無計画に退職してしまいました...',
      subtitle: '貯金が底をついて困窮しているようです',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
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
  },
  'regret-bad': {
    // メタデータ
    title: '衝動退職で後悔... - ブラック企業からの脱出',
    description: '何も考えずに辞めてしまい後悔しています...😭 計画は大事ですね',

    // Xシェア
    shareText: '何も考えずに辞めてしまい後悔しています...😭\n計画は大事ですね',
    emoji: '😭',

    // UI表示
    shareMessage: {
      icon: '😭',
      title: '誰かが衝動退職してしまいました...',
      subtitle: '計画なしで辞めて後悔しているようです',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },
  'fired-bad': {
    // メタデータ
    title: '解雇されました... - ブラック企業からの脱出',
    description: '感情的に訴えたら解雇されてしまいました...😱 冷静さは大切ですね',

    // Xシェア
    shareText: '感情的に訴えたら解雇されてしまいました...😱\n冷静さは大切ですね',
    emoji: '😱',

    // UI表示
    shareMessage: {
      icon: '😱',
      title: '誰かが解雇されてしまいました...',
      subtitle: '感情的な行動が裏目に出たようです',
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