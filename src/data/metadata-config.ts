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

  'parting_and_cry_then_jobhunt': {
    title: '転職決意！ - ブラック企業からの脱出',
    description: '後輩と別れた瞬間、泣き崩れました😢 でも決断した！この会社には居られない💪 後輩のためにも、自分のためにも転職活動を本格化🔥',
    shareText: '後輩と別れた瞬間、泣き崩れました😢\nでも決断した！この会社には居られない💪\n後輩のためにも、自分のためにも転職活動を本格化🔥\n\n#転職決意 #ブラック企業脱出',
    emoji: '💪',
    shareMessage: {
      icon: '💪',
      title: '誰かが転職を決意しました！',
      subtitle: '辛い状況から立ち上がったようです💪',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'receive_settlement_money': {
    title: '弁護士和解で勝利！ - ブラック企業からの脱出',
    description: '和解金を獲得しました！💰 数百万円の和解金で新しい人生をスタート✨ 法的手段で未払い残業代を勝ち取りました⚖️',
    shareText: '和解金を獲得しました！💰\n数百万円の和解金で新しい人生をスタート✨\n法的手段で未払い残業代を勝ち取りました⚖️\n\n#弁護士 #和解成功 #未払い残業代',
    emoji: '⚖️',
    shareMessage: {
      icon: '⚖️',
      title: '誰かが法的手段で勝利しました！',
      subtitle: '和解金を獲得して新しい人生へ✨',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  // === バッドエンド ===
  'punch_boss': {
    title: '衝動的暴行で人生破綻... - ブラック企業からの脱出',
    description: '部長を殴って暴行罪で訴えられました...💀 衝動に駆られた一瞬の行動が全てを失わせました😱 冷静な判断が大切ですね💦',
    shareText: '部長を殴って暴行罪で訴えられました...💀\n衝動に駆られた一瞬の行動が全てを失わせました😱\n冷静な判断が大切ですね💦\n\n#衝動は危険 #暴行罪',
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

  'health_breakdown': {
    title: '過労で体調崩壊... - ブラック企業からの脱出',
    description: '過労で倒れて病院送り...🏥 体が資本だということを身をもって学びました😵 体調回復前に退職せざるを得なくなりました💊',
    shareText: '過労で倒れて病院送り...🏥\n体が資本だということを身をもって学びました😵\n体調回復前に退職せざるを得なくなりました💊\n\n#過労 #健康第一',
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
  },

  'thirty_minutes_condition': {
    title: '後輩を潰してしまった... - ブラック企業からの脱出',
    description: '後輩を見捨てて、メンタル不調で退職させてしまいました...😢 自分が残業に付き合わせたのに💔 責任感の大切さを痛感😭',
    shareText: '後輩を見捨てて、メンタル不調で退職させてしまいました...😢\n自分が残業に付き合わせたのに💔\n責任感の大切さを痛感😭\n\n#後輩を潰す #責任',
    emoji: '💔',
    shareMessage: {
      icon: '💔',
      title: '誰かが後輩を潰してしまいました...',
      subtitle: '責任の重さを実感したようです😢',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'work_alone_suffer': {
    title: '過労で限界... - ブラック企業からの脱出',
    description: '一人で作業を続け、深夜1時を過ぎても終わらない...😰 メンタル限界で転職も失敗💔 一人で抱え込むのは危険ですね😭',
    shareText: '一人で作業を続け、深夜1時を過ぎても終わらない...😰\nメンタル限界で転職も失敗💔\n一人で抱え込むのは危険ですね😭\n\n#過労 #メンタル限界',
    emoji: '😰',
    shareMessage: {
      icon: '😰',
      title: '誰かが過労で限界に達しました...',
      subtitle: '一人で抱え込むのは危険ですね💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'interview_failure': {
    title: '面接不合格で転職失敗... - ブラック企業からの脱出',
    description: 'すべての企業から不採用通知が...😢 実務経験不足、スキル不足を指摘されました💦 準備の大切さを実感😭',
    shareText: 'すべての企業から不採用通知が...😢\n実務経験不足、スキル不足を指摘されました💦\n準備の大切さを実感😭\n\n#転職失敗 #不採用',
    emoji: '📋',
    shareMessage: {
      icon: '📋',
      title: '誰かが転職活動で失敗してしまいました...',
      subtitle: '準備の重要性を学んだようです💦',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  'job_search_burnout': {
    title: '転職活動疲弊で諦め... - ブラック企業からの脱出',
    description: '3ヶ月の転職活動でモチベーション完全消失...😭 疲れて現状に諦めるしかありませんでした💔 継続の難しさを痛感💦',
    shareText: '3ヶ月の転職活動でモチベーション完全消失...😭\n疲れて現状に諦めるしかありませんでした💔\n継続の難しさを痛感💦\n\n#転職疲れ #諦め',
    emoji: '😞',
    shareMessage: {
      icon: '😞',
      title: '誰かが転職活動に疲れてしまいました...',
      subtitle: '継続することの難しさを実感したようです💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'offer_retracted': {
    title: '内定取消で希望喪失... - ブラック企業からの脱出',
    description: '内定をもらったのに事業計画変更で取り消しに...😱 一度手に入れた希望が消え去りました💔 心が完全に折れました😭',
    shareText: '内定をもらったのに事業計画変更で取り消しに...😱\n一度手に入れた希望が消え去りました💔\n心が完全に折れました😭\n\n#内定取消 #希望喪失',
    emoji: '💔',
    shareMessage: {
      icon: '💔',
      title: '誰かが内定を取り消されてしまいました...',
      subtitle: '希望が消え去った瞬間でした😢',
      color: 'text-purple-300',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500'
    }
  },

  'evidence_discovered': {
    title: '証拠集めバレて退職勧告... - ブラック企業からの脱出',
    description: '証拠集めが会社にバレて退職勧告を受けました...😱 慎重さが足りませんでした💦 適切な方法の大切さを痛感😭',
    shareText: '証拠集めが会社にバレて退職勧告を受けました...😱\n慎重さが足りませんでした💦\n適切な方法の大切さを痛感😭\n\n#証拠集め失敗 #退職勧告',
    emoji: '🚨',
    shareMessage: {
      icon: '🚨',
      title: '誰かが証拠集めで失敗してしまいました...',
      subtitle: '慎重さの大切さを学んだようです💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'lawyer_negotiation_breakdown': {
    title: '交渉破裂で退職勧告... - ブラック企業からの脱出',
    description: '弁護士交渉が破綻して会社から退職勧告を受けました...😱 交渉手法を間違えました💦 冷静な対応が必要でしたね😭',
    shareText: '弁護士交渉が破綻して会社から退職勧告を受けました...😱\n交渉手法を間違えました💦\n冷静な対応が必要でしたね😭\n\n#交渉破裂 #退職勧告',
    emoji: '⚠️',
    shareMessage: {
      icon: '⚠️',
      title: '誰かが交渉で失敗してしまいました...',
      subtitle: '冷静な対応の大切さを学んだようです💦',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
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
  good: ['new_company_start', 'company_wide_union', 'parting_and_cry_then_jobhunt', 'receive_settlement_money'],
  bad: [
    'punch_boss', 'health_breakdown', 'mental_breakdown', 'thirty_minutes_condition',
    'work_alone_suffer', 'interview_failure', 'job_search_burnout', 'offer_retracted',
    'evidence_discovered', 'lawyer_negotiation_breakdown'
  ]
};