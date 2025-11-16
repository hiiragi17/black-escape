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
  // === グッドエンド ===
  'new_company_start': {
    title: '転職成功！ - ブラック企業からの脱出',
    description: 'ついに転職成功！✨ 普通の会社で働けることになりました💪 定時退社、有給取得、適正な残業代...これが当たり前だったんですね🌈',
    shareText: 'ついに転職成功！✨\n普通の会社で働けることになりました💪\n定時退社、有給取得、適正な残業代...これが当たり前だったんですね🌈\n\n#ブラック企業脱出 #転職成功',
    emoji: '🌟',
    shareMessage: {
      icon: '🌟',
      title: '誰かが転職で脱出成功しました！',
      subtitle: 'ブラック企業から見事に脱出したようです✨',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },

  'company_wide_union': {
    title: '労働組合で会社改革成功！ - ブラック企業からの脱出',
    description: '労働組合結成で会社を変えました！💪 仲間と団結して残業代改善、労働時間短縮を実現🔥 みんなで力を合わせれば会社は変えられる！✊',
    shareText: '労働組合結成で会社を変えました！💪\n仲間と団結して残業代改善、労働時間短縮を実現🔥\nみんなで力を合わせれば会社は変えられる！✊\n\n#労働組合 #会社改革 #団結',
    emoji: '✊',
    shareMessage: {
      icon: '✊',
      title: '誰かが労働組合で会社を変えました！',
      subtitle: '仲間と団結して改革を成し遂げたようです🔥',
      color: 'text-orange-300',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500'
    }
  },

  'endure_alone': {
    title: '労基介入で会社完全改革！ - ブラック企業からの脱出',
    description: '労働基準監督署の力で会社が生まれ変わりました！⚖️ 一人で耐え抜いた甲斐がありました💪 法の力は偉大です🏛️',
    shareText: '労働基準監督署の力で会社が生まれ変わりました！⚖️\n一人で耐え抜いた甲斐がありました💪\n法の力は偉大です🏛️\n\n#労働基準監督署 #労基 #法的解決',
    emoji: '⚖️',
    shareMessage: {
      icon: '⚖️',
      title: '誰かが労基の力で会社を変えました！',
      subtitle: '法的手段で見事に改革を成し遂げたようです⚖️',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  // === バッドエンド ===
  'punch_boss': {
    title: '衝動的解雇... - ブラック企業からの脱出',
    description: '部長を殴って即座に懲戒解雇...💀 感情に任せた行動は禁物でした😱 冷静な判断が大切ですね💦',
    shareText: '部長を殴って即座に懲戒解雇...💀\n感情に任せた行動は禁物でした😱\n冷静な判断が大切ですね💦\n\n#ブラック企業 #衝動は危険',
    emoji: '💥',
    shareMessage: {
      icon: '💥',
      title: '誰かが衝動的に行動してしまいました...',
      subtitle: '感情的な判断は危険ですね💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'continue_daily_grind': {
    title: '時間を無駄にして手遅れ... - ブラック企業からの脱出',
    description: '何も行動せずに1年が経過...⏰ 同期はみんな転職していました😢 行動の大切さを痛感しました💔',
    shareText: '何も行動せずに1年が経過...⏰\n同期はみんな転職していました😢\n行動の大切さを痛感しました💔\n\n#先延ばし #機会損失',
    emoji: '⏰',
    shareMessage: {
      icon: '⏰',
      title: '誰かが機会を逃してしまいました...',
      subtitle: '行動することの大切さを学んだようです💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'health_breakdown': {
    title: '過労で体調崩壊... - ブラック企業からの脱出',
    description: '過労で倒れて病院送り...🏥 体が資本だということを身をもって学びました😵 健康第一ですね💊',
    shareText: '過労で倒れて病院送り...🏥\n体が資本だということを身をもって学びました😵\n健康第一ですね💊\n\n#過労 #健康第一',
    emoji: '🏥',
    shareMessage: {
      icon: '🏥',
      title: '誰かが過労で倒れてしまいました...',
      subtitle: '健康管理の大切さを痛感したようです💔',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'double_down_lie': {
    title: '嘘がバレて懲戒処分... - ブラック企業からの脱出',
    description: '嘘を重ねた結果、懲戒処分に...😰 正直さの大切さを学びました💦 誠実な対応が一番ですね🙏',
    shareText: '嘘を重ねた結果、懲戒処分に...😰\n正直さの大切さを学びました💦\n誠実な対応が一番ですね🙏\n\n#正直が一番 #誠実さ',
    emoji: '😰',
    shareMessage: {
      icon: '😰',
      title: '誰かが嘘で墓穴を掘ってしまいました...',
      subtitle: '正直さの大切さを学んだようです💦',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'continue_bullying': {
    title: 'ブラック企業に毒されて人格崩壊... - ブラック企業からの脱出',
    description: '後輩いびりが習慣化してしまいました...👹 ブラック企業に染まって最悪の結果に💔 環境が人を変えるのは恐ろしいですね😱',
    shareText: '後輩いびりが習慣化してしまいました...👹\nブラック企業に染まって最悪の結果に💔\n環境が人を変えるのは恐ろしいですね😱\n\n#ブラック企業の毒 #環境の力',
    emoji: '👹',
    shareMessage: {
      icon: '👹',
      title: '誰かがブラック企業に毒されてしまいました...',
      subtitle: '環境の影響力の恐ろしさを実感したようです😱',
      color: 'text-purple-300',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500'
    }
  },

  'escape_reality': {
    title: '現実逃避で取り残される... - ブラック企業からの脱出',
    description: '現実逃避して何もしないまま5年が経過...🎮 同期は全員転職済みでした😢 行動することの重要性を痛感💦',
    shareText: '現実逃避して何もしないまま5年が経過...🎮\n同期は全員転職済みでした😢\n行動することの重要性を痛感💦\n\n#現実逃避 #行動の重要性',
    emoji: '🎮',
    shareMessage: {
      icon: '🎮',
      title: '誰かが現実逃避してしまいました...',
      subtitle: '行動することの大切さを学んだようです💦',
      color: 'text-indigo-300',
      bgColor: 'from-indigo-900/20 to-purple-900/20',
      borderColor: 'border-indigo-500'
    }
  },

  'social_media_expose_harassment': {
    title: 'SNS拡散で名誉毀損で訴えられる... - ブラック企業からの脱出',
    description: 'SNSで会社を告発したら逆に訴えられました...⚖️💸 拡散の怖さを身をもって体験😱 適切な手順が大切ですね💦',
    shareText: 'SNSで会社を告発したら逆に訴えられました...⚖️💸\n拡散の怖さを身をもって体験😱\n適切な手順が大切ですね💦\n\n#SNSリスク #名誉毀損',
    emoji: '📱',
    shareMessage: {
      icon: '📱',
      title: '誰かがSNSで失敗してしまいました...',
      subtitle: 'ネット拡散の怖さを学んだようです😱',
      color: 'text-cyan-300',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      borderColor: 'border-cyan-500'
    }
  },

  'seek_colleague_support': {
    title: '同僚に裏切られて完全孤立... - ブラック企業からの脱出',
    description: '同僚に相談したら部長に密告されました...😭 信頼していた人に裏切られるとは💔 人間関係の難しさを痛感😢',
    shareText: '同僚に相談したら部長に密告されました...😭\n信頼していた人に裏切られるとは💔\n人間関係の難しさを痛感😢\n\n#裏切り #人間不信',
    emoji: '😭',
    shareMessage: {
      icon: '😭',
      title: '誰かが同僚に裏切られてしまいました...',
      subtitle: '人間関係の難しさを痛感したようです💔',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  'hidden_camera_evidence': {
    title: '盗撮で逮捕される... - ブラック企業からの脱出',
    description: '証拠のための隠しカメラが盗撮として逮捕...🚔 正当な目的でも方法を間違えると犯罪に😱 適切な証拠収集が大切ですね💦',
    shareText: '証拠のための隠しカメラが盗撮として逮捕...🚔\n正当な目的でも方法を間違えると犯罪に😱\n適切な証拠収集が大切ですね💦\n\n#盗撮 #証拠収集',
    emoji: '🚔',
    shareMessage: {
      icon: '🚔',
      title: '誰かが証拠収集で失敗してしまいました...',
      subtitle: '適切な方法の大切さを学んだようです😱',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'colleague_testimony': {
    title: '証拠不足で泣き寝入り... - ブラック企業からの脱出',
    description: '同僚が誰も証言してくれず証拠不足...😞 一人では限界があることを実感💔 事前の準備と仲間作りが重要ですね😢',
    shareText: '同僚が誰も証言してくれず証拠不足...😞\n一人では限界があることを実感💔\n事前の準備と仲間作りが重要ですね😢\n\n#証拠不足 #仲間の大切さ',
    emoji: '😞',
    shareMessage: {
      icon: '😞',
      title: '誰かが証拠不足で諦めることに...',
      subtitle: '準備の大切さを痛感したようです💔',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'consult_lawyer': {
    title: '弁護士費用で経済的困窮... - ブラック企業からの脱出',
    description: '弁護士費用で貯金が底をつきました...💸 法的には勝ったけど経済的に負け😭 費用対効果も考える必要がありますね💦',
    shareText: '弁護士費用で貯金が底をつきました...💸\n法的には勝ったけど経済的に負け😭\n費用対効果も考える必要がありますね💦\n\n#弁護士費用 #経済的負担',
    emoji: '💸',
    shareMessage: {
      icon: '💸',
      title: '誰かが弁護士費用で困窮してしまいました...',
      subtitle: '費用対効果の大切さを学んだようです💦',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },

  // === 労働組合関連のバッドエンド ===
  'big_initial_demand': {
    title: '過大要求で組合分裂... - ブラック企業からの脱出',
    description: 'いきなり大きな要求をして組合が分裂...💔 段階的なアプローチが大切でした😢 組合運営の難しさを実感💦',
    shareText: 'いきなり大きな要求をして組合が分裂...💔\n段階的なアプローチが大切でした😢\n組合運営の難しさを実感💦\n\n#労働組合 #段階的アプローチ',
    emoji: '💔',
    shareMessage: {
      icon: '💔',
      title: '誰かの組合が分裂してしまいました...',
      subtitle: '段階的なアプローチの大切さを学んだようです😢',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'focus_on_recruitment': {
    title: '組合内部対立で分裂... - ブラック企業からの脱出',
    description: '組合員が増えすぎて意見がまとまらず分裂...😵 組織運営の難しさを痛感💦 統率力が重要ですね👥',
    shareText: '組合員が増えすぎて意見がまとまらず分裂...😵\n組織運営の難しさを痛感💦\n統率力が重要ですね👥\n\n#組織運営 #リーダーシップ',
    emoji: '👥',
    shareMessage: {
      icon: '👥',
      title: '誰かの組合が内部対立で分裂しました...',
      subtitle: '組織運営の難しさを実感したようです😵',
      color: 'text-orange-300',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500'
    }
  },

  'suspend_activities': {
    title: '消極的対応で組合消滅... - ブラック企業からの脱出',
    description: '様子見してたら組合が自然消滅...😢 タイミングと積極性の大切さを学びました💦 機会は待ってくれませんね⏰',
    shareText: '様子見してたら組合が自然消滅...😢\nタイミングと積極性の大切さを学びました💦\n機会は待ってくれませんね⏰\n\n#機会損失 #積極性',
    emoji: '⏰',
    shareMessage: {
      icon: '⏰',
      title: '誰かの組合が消滅してしまいました...',
      subtitle: 'タイミングの重要性を学んだようです💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'mental_breakdown': {
    title: '報復で精神を病んで退職... - ブラック企業からの脱出',
    description: '会社からの報復で精神を病んでしまいました...😭 労災申請も認められず...💔 ブラック企業の恐ろしさを実感😱',
    shareText: '会社からの報復で精神を病んでしまいました...😭\n労災申請も認められず...💔\nブラック企業の恐ろしさを実感😱\n\n#精神的ダメージ #報復人事',
    emoji: '😭',
    shareMessage: {
      icon: '😭',
      title: '誰かが精神的に追い詰められてしまいました...',
      subtitle: 'ブラック企業の恐ろしさを実感したようです😱',
      color: 'text-purple-300',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500'
    }
  }
};

// デフォルト設定
export const defaultConfig: EndingConfig = {
  title: 'ブラック企業からの脱出 - 選択型ノベルゲーム',
  description: '残業地獄から脱出せよ！転職、労働組合、労基...あなたはどの道を選ぶ？リアルなブラック企業体験ゲーム🎮',
  shareText: 'ブラック企業からの脱出に挑戦中！🔥\n残業地獄から脱出できるかな？\nあなたも挑戦してみて！\n\n#ブラック企業脱出 #ノベルゲーム',
  emoji: '🎮',
  shareMessage: {
    icon: '🎮',
    title: '誰かがブラック企業脱出に挑戦中！',
    subtitle: 'どんな結末を迎えるのでしょうか？',
    color: 'text-blue-300',
    bgColor: 'from-blue-900/20 to-purple-900/20',
    borderColor: 'border-blue-500'
  }
};

// ヘルパー関数
export function getEndingConfig(endingId?: string): EndingConfig {
  if (!endingId) return defaultConfig;
  return endingConfig[endingId] || defaultConfig;
}

export function getEndingMetadata(endingId?: string) {
  return getEndingConfig(endingId);
}

// 全エンディング一覧（管理用）
export const allEndings = {
  good: ['new_company_start', 'company_wide_union', 'endure_alone'],
  bad: [
    'punch_boss', 'continue_daily_grind', 'health_breakdown', 'double_down_lie',
    'continue_bullying', 'escape_reality', 'social_media_expose_harassment',
    'seek_colleague_support', 'hidden_camera_evidence', 'colleague_testimony',
    'consult_lawyer', 'big_initial_demand', 'focus_on_recruitment', 
    'suspend_activities', 'mental_breakdown'
  ]
};