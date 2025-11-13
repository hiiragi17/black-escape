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
  'hasty-job': {
    // メタデータ
    title: '転職したけど... - ブラック企業からの脱出',
    description: '焦って転職したら、新しい会社も微妙でした...😅 でも前よりはマシかな？',

    // Xシェア
    shareText: '焦って転職したら、新しい会社も微妙でした...😅\nでも前よりはマシかな？',
    emoji: '😅',

    // UI表示
    shareMessage: {
      icon: '😅',
      title: '誰かが転職しました',
      subtitle: '新しい会社は...まあまあみたいです',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },
  'survival-normal': {
    // メタデータ
    title: 'なんとか生き延びる - ブラック企業からの脱出',
    description: '適度に手を抜いて生き延びることにしました💼 これも一つの生き方です',

    // Xシェア
    shareText: '適度に手を抜いて生き延びることにしました💼\nこれも一つの生き方です',
    emoji: '💼',

    // UI表示
    shareMessage: {
      icon: '💼',
      title: '誰かが生き延びる道を選びました',
      subtitle: '適度に手を抜いて生きていくようです',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },
  'jobless-normal': {
    // メタデータ
    title: '無職だけど自由 - ブラック企業からの脱出',
    description: '会社を辞めて自由になりました🌊 貯金を切り崩しながらじっくり次を考えます',

    // Xシェア
    shareText: '会社を辞めて自由になりました🌊\n貯金を切り崩しながらじっくり次を考えます',
    emoji: '🌊',

    // UI表示
    shareMessage: {
      icon: '🌊',
      title: '誰かが会社を辞めました',
      subtitle: '無職だけど自由を手に入れたようです',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      borderColor: 'border-blue-500'
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