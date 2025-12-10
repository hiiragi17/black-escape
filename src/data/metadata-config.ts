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
  // === グッドエンド（3個）===
  'parting_and_cry_then_jobhunt': {
    title: '転職成功で新たな人生へ！ - ブラック企業からの脱出',
    description: 'ついに転職成功！✨ 後輩との別れを経て決意し、新しい会社で人間らしく働けることに💪 深く息を吸った。新しい人生の始まりだ🌈',
    shareText: 'ついに転職成功！✨\n後輩との別れを経て決意し、新しい会社で人間らしく働けることに💪\n深く息を吸った。新しい人生の始まりだ🌈\n\n#ブラック企業脱出 #転職成功',
    emoji: '🌟',
    shareMessage: {
      icon: '🌟',
      title: '誰かが転職で脱出成功しました！',
      subtitle: '感動的な決意の末、見事に脱出したようです✨',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },

  'company_wide_union': {
    title: '労働組合で会社改革成功！ - ブラック企業からの脱出',
    description: '労働組合を全社に拡大して会社を変えました！💪 従業員の8割が加入し、残業代・労働環境が大幅改善🔥 普通の会社になりました✊',
    shareText: '労働組合を全社に拡大して会社を変えました！💪\n従業員の8割が加入し、残業代・労働環境が大幅改善🔥\n普通の会社になりました✊\n\n#労働組合 #会社改革 #団結',
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

  'receive_settlement_money': {
    title: '弁護士による和解成功！ - ブラック企業からの脱出',
    description: '弁護士と協力して和解金を獲得！⚖️ 数百万円の和解金で新しい人生をスタート💰 法的手段で見事に勝利しました🏛️',
    shareText: '弁護士と協力して和解金を獲得！⚖️\n数百万円の和解金で新しい人生をスタート💰\n法的手段で見事に勝利しました🏛️\n\n#弁護士 #和解成功 #法的解決',
    emoji: '⚖️',
    shareMessage: {
      icon: '⚖️',
      title: '誰かが弁護士の力で和解しました！',
      subtitle: '法的手段で見事に勝利を掴んだようです⚖️',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  // === バッドエンド（27個）===

  // 基本的なバッドエンド
  'work_alone_suffer': {
    title: '一人で耐えて限界に... - ブラック企業からの脱出',
    description: '一人で耐え続けて心身ともに限界に...😭 誰にも助けを求めずに倒れてしまいました💔 周りに助けを求めることも大切ですね😢',
    shareText: '一人で耐え続けて心身ともに限界に...😭\n誰にも助けを求めずに倒れてしまいました💔\n周りに助けを求めることも大切ですね😢\n\n#孤独な戦い #限界',
    emoji: '😭',
    shareMessage: {
      icon: '😭',
      title: '誰かが一人で抱え込んでしまいました...',
      subtitle: '助けを求める勇気も必要ですね💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'thirty_minutes_condition': {
    title: '部下を潰す側に... - ブラック企業からの脱出',
    description: 'ブラック企業の価値観に染まって部下を潰す側に...👹 環境が人を変える恐ろしさを実感💔 気づいた時にはもう遅かった😱',
    shareText: 'ブラック企業の価値観に染まって部下を潰す側に...👹\n環境が人を変える恐ろしさを実感💔\n気づいた時にはもう遅かった😱\n\n#ブラック企業の毒 #環境の力',
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

  'punch_boss': {
    title: '衝動的暴行で人生破綻... - ブラック企業からの脱出',
    description: '部長を殴って暴行罪で訴えられました...💥 一瞬の怒りで全てを失いました😱 冷静な判断が何より大切ですね💦',
    shareText: '部長を殴って暴行罪で訴えられました...💥\n一瞬の怒りで全てを失いました😱\n冷静な判断が何より大切ですね💦\n\n#衝動は危険 #暴力厳禁',
    emoji: '💥',
    shareMessage: {
      icon: '💥',
      title: '誰かが衝動的に行動してしまいました...',
      subtitle: '感情的な判断は本当に危険ですね💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'health_breakdown': {
    title: '過労で体調崩壊... - ブラック企業からの脱出',
    description: '過労で倒れて病院送り...🏥 体が資本だということを身をもって学びました😵 健康第一です💊',
    shareText: '過労で倒れて病院送り...🏥\n体が資本だということを身をもって学びました😵\n健康第一です💊\n\n#過労 #健康第一',
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

  'job_search_burnout': {
    title: '転職活動に疲弊して諦める... - ブラック企業からの脱出',
    description: '転職活動を3ヶ月続けて完全に疲弊...😢 モチベーションが消え、結局諦めてしまいました💔 現状維持という名の後退😭',
    shareText: '転職活動を3ヶ月続けて完全に疲弊...😢\nモチベーションが消え、結局諦めてしまいました💔\n現状維持という名の後退😭\n\n#転職疲れ #諦め',
    emoji: '😢',
    shareMessage: {
      icon: '😢',
      title: '誰かが転職活動で燃え尽きてしまいました...',
      subtitle: '継続の難しさを痛感したようです💦',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  'evidence_discovered': {
    title: '証拠集めがバレて退職勧告... - ブラック企業からの脱出',
    description: '証拠集めが会社にバレてしまいました...📱 退職勧告を突きつけられました😱 慎重さが足りませんでした💦',
    shareText: '証拠集めが会社にバレてしまいました...📱\n退職勧告を突きつけられました😱\n慎重さが足りませんでした💦\n\n#証拠集め #バレた',
    emoji: '📱',
    shareMessage: {
      icon: '📱',
      title: '誰かが証拠集めでバレてしまいました...',
      subtitle: '慎重さの大切さを学んだようです😱',
      color: 'text-cyan-300',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      borderColor: 'border-cyan-500'
    }
  },

  'lawyer_negotiation_breakdown': {
    title: '交渉破裂で退職勧告... - ブラック企業からの脱出',
    description: '交渉を強硬に進めすぎて決裂...⚖️ 会社から退職勧告されてしまいました💔 柔軟な対応も必要でした😢',
    shareText: '交渉を強硬に進めすぎて決裂...⚖️\n会社から退職勧告されてしまいました💔\n柔軟な対応も必要でした😢\n\n#交渉決裂 #やりすぎ',
    emoji: '⚖️',
    shareMessage: {
      icon: '⚖️',
      title: '誰かが交渉でやりすぎてしまいました...',
      subtitle: 'バランス感覚の大切さを学んだようです💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  // 労働組合関連のバッドエンド
  'union_info_leak': {
    title: '情報漏洩で組合が潰される... - ブラック企業からの脱出',
    description: '大人数に声をかけてスパイに情報が漏れました...😱 組合結成前に全員バラバラの部署に飛ばされました💔 信頼できる人選びが重要ですね😢',
    shareText: '大人数に声をかけてスパイに情報が漏れました...😱\n組合結成前に全員バラバラの部署に飛ばされました💔\n信頼できる人選びが重要ですね😢\n\n#情報漏洩 #組合潰し',
    emoji: '🕵️',
    shareMessage: {
      icon: '🕵️',
      title: '誰かの組合計画が漏れてしまいました...',
      subtitle: '信頼関係の大切さを痛感したようです😱',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'union_legal_mistake': {
    title: '法的知識不足で組合活動失敗... - ブラック企業からの脱出',
    description: '法律の知識がないまま交渉して重大ミス...📚 逆に業務妨害で訴えられそうに😱 専門知識の重要性を痛感💦',
    shareText: '法律の知識がないまま交渉して重大ミス...📚\n逆に業務妨害で訴えられそうに😱\n専門知識の重要性を痛感💦\n\n#法的知識 #準備不足',
    emoji: '📚',
    shareMessage: {
      icon: '📚',
      title: '誰かが法律知識不足で失敗しました...',
      subtitle: '事前の勉強の大切さを学んだようです😢',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  'union_crushed_early': {
    title: '会社に先手を打たれて組合潰される... - ブラック企業からの脱出',
    description: '会社に事前相談したら逆に先手を打たれました...😱 組合結成前にメンバー全員が退職を選ぶ羽目に💔 相手を見誤りました😭',
    shareText: '会社に事前相談したら逆に先手を打たれました...😱\n組合結成前にメンバー全員が退職を選ぶ羽目に💔\n相手を見誤りました😭\n\n#先手必勝 #判断ミス',
    emoji: '🚫',
    shareMessage: {
      icon: '🚫',
      title: '誰かが会社に先手を打たれてしまいました...',
      subtitle: '戦略の重要性を痛感したようです💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'informal_group_failure': {
    title: '非公式グループで団体交渉権なし... - ブラック企業からの脱出',
    description: '正式登録せずに交渉したら団体交渉権なしと言われました...😢 法的な保護を受けられず失敗💔 正式な手続きが大切ですね📝',
    shareText: '正式登録せずに交渉したら団体交渉権なしと言われました...😢\n法的な保護を受けられず失敗💔\n正式な手続きが大切ですね📝\n\n#手続き重要 #団体交渉権',
    emoji: '📝',
    shareMessage: {
      icon: '📝',
      title: '誰かが手続き不備で失敗しました...',
      subtitle: '正式な手続きの重要性を学んだようです😢',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'violent_confrontation': {
    title: '暴力沙汰で解雇・刑事事件化... - ブラック企業からの脱出',
    description: '怒りで人事部長を突き飛ばして暴行容疑...🚨 組合活動どころか刑事事件に発展💔 冷静さを失ったのが致命的でした😱',
    shareText: '怒りで人事部長を突き飛ばして暴行容疑...🚨\n組合活動どころか刑事事件に発展💔\n冷静さを失ったのが致命的でした😱\n\n#暴力厳禁 #刑事事件',
    emoji: '🚨',
    shareMessage: {
      icon: '🚨',
      title: '誰かが暴力で全てを失いました...',
      subtitle: '冷静さの重要性を痛感したようです😱',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'union_dissolution': {
    title: '会社の圧力に屈して組合解散... - ブラック企業からの脱出',
    description: '会社の圧力が想像以上に激しく怖くなりました...😰 全員が自主退職プログラムに応募することに💔 勇気が足りませんでした😢',
    shareText: '会社の圧力が想像以上に激しく怖くなりました...😰\n全員が自主退職プログラムに応募することに💔\n勇気が足りませんでした😢\n\n#圧力に屈する #退職',
    emoji: '😰',
    shareMessage: {
      icon: '😰',
      title: '誰かが会社の圧力に屈してしまいました...',
      subtitle: '勇気を持ち続けることの難しさを知ったようです💦',
      color: 'text-purple-300',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500'
    }
  },

  'union_split': {
    title: '組合分裂で孤立無援... - ブラック企業からの脱出',
    description: '昇進提示で組合員が次々と脱退...😭 組合は分裂し、残ったのは自分一人だけ💔 団結の難しさを痛感しました😢',
    shareText: '昇進提示で組合員が次々と脱退...😭\n組合は分裂し、残ったのは自分一人だけ💔\n団結の難しさを痛感しました😢\n\n#組合分裂 #孤立',
    emoji: '💔',
    shareMessage: {
      icon: '💔',
      title: '誰かの組合が分裂してしまいました...',
      subtitle: '団結を維持する難しさを学んだようです😭',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },

  'union_internal_conflict': {
    title: '内部対立で組合崩壊... - ブラック企業からの脱出',
    description: '感情的な対立がエスカレートして内部崩壊...😤 メンバー同士の信頼関係が完全に破綻💔 冷静なコミュニケーションが必要でした😢',
    shareText: '感情的な対立がエスカレートして内部崩壊...😤\nメンバー同士の信頼関係が完全に破綻💔\n冷静なコミュニケーションが必要でした😢\n\n#内部対立 #組織崩壊',
    emoji: '😤',
    shareMessage: {
      icon: '😤',
      title: '誰かの組合が内部対立で崩壊しました...',
      subtitle: '組織運営の難しさを実感したようです💦',
      color: 'text-orange-300',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500'
    }
  },

  'weak_union_settlement': {
    title: '不利な和解で組合の威信失墜... - ブラック企業からの脱出',
    description: '妥協して低額和解...😞 組合の威信は失墜し、他の社員からも失望されました💔 粘り強さが足りませんでした😢',
    shareText: '妥協して低額和解...😞\n組合の威信は失墜し、他の社員からも失望されました💔\n粘り強さが足りませんでした😢\n\n#妥協 #威信失墜',
    emoji: '😞',
    shareMessage: {
      icon: '😞',
      title: '誰かが妥協しすぎてしまいました...',
      subtitle: '粘り強さの大切さを学んだようです💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'evidence_backfire': {
    title: '証拠提示のタイミングミスで逆効果... - ブラック企業からの脱出',
    description: '交渉冒頭で切り札の録音を出してしまいました...😱 違法な盗聴行為と指摘され逆に攻撃材料に💔 タイミングが全てでした😭',
    shareText: '交渉冒頭で切り札の録音を出してしまいました...😱\n違法な盗聴行為と指摘され逆に攻撃材料に💔\nタイミングが全てでした😭\n\n#タイミング重要 #切り札',
    emoji: '🃏',
    shareMessage: {
      icon: '🃏',
      title: '誰かが切り札を早く出しすぎました...',
      subtitle: 'タイミングの重要性を痛感したようです😱',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'premature_expansion': {
    title: '拙速な拡大で管理職の反撃... - ブラック企業からの脱出',
    description: '勢いで全社に一気に拡大を呼びかけました...😤 会社が組合潰しの専門コンサルを雇って組織的な反撃💔 準備不足でした😭',
    shareText: '勢いで全社に一気に拡大を呼びかけました...😤\n会社が組合潰しの専門コンサルを雇って組織的な反撃💔\n準備不足でした😭\n\n#拙速 #準備不足',
    emoji: '⚡',
    shareMessage: {
      icon: '⚡',
      title: '誰かが急ぎすぎてしまいました...',
      subtitle: '準備の大切さを痛感したようです💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'small_union_success': {
    title: '小さな成功に満足して全社改革を放棄... - ブラック企業からの脱出',
    description: '3人だけ残業代をもらって満足...😌 他部署の労働環境は何も変わらず💔 罪悪感を感じながら毎日を過ごしています😢',
    shareText: '3人だけ残業代をもらって満足...😌\n他部署の労働環境は何も変わらず💔\n罪悪感を感じながら毎日を過ごしています😢\n\n#小さな成功 #現状維持',
    emoji: '😌',
    shareMessage: {
      icon: '😌',
      title: '誰かが小さな成功で満足してしまいました...',
      subtitle: '大きな目標を持つ大切さを感じたようです💦',
      color: 'text-green-300',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      borderColor: 'border-green-500'
    }
  },

  // 弁護士関連のバッドエンド
  'incompetent_lawyer': {
    title: '無能な弁護士で大損失... - ブラック企業からの脱出',
    description: '安い弁護士に依頼したら知識不足が露呈...😱 会社にいいようにあしらわれ10万円の和解金で終了💔 安物買いの銭失いでした😭',
    shareText: '安い弁護士に依頼したら知識不足が露呈...😱\n会社にいいようにあしらわれ10万円の和解金で終了💔\n安物買いの銭失いでした😭\n\n#弁護士選び #安物買い',
    emoji: '💸',
    shareMessage: {
      icon: '💸',
      title: '誰かが弁護士選びで失敗しました...',
      subtitle: '専門性の重要性を痛感したようです😢',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'lawyer_refuses_case': {
    title: '準備不足で弁護士に受任拒否される... - ブラック企業からの脱出',
    description: '証拠がない状態で弁護士に相談...😢 勝訴の見込みが低いと受任拒否されました💔 事前準備の大切さを痛感😭',
    shareText: '証拠がない状態で弁護士に相談...😢\n勝訴の見込みが低いと受任拒否されました💔\n事前準備の大切さを痛感😭\n\n#準備不足 #受任拒否',
    emoji: '📋',
    shareMessage: {
      icon: '📋',
      title: '誰かが準備不足で断られてしまいました...',
      subtitle: '事前準備の重要性を学んだようです💦',
      color: 'text-gray-300',
      bgColor: 'from-gray-900/20 to-slate-900/20',
      borderColor: 'border-gray-500'
    }
  },

  'lawyer_initial_consultation_bad': {
    title: '専門外の弁護士で失敗... - ブラック企業からの脱出',
    description: '知人紹介の弁護士は労働問題が専門外...😰 会社側に太刀打ちできず交渉失敗💔 弁護士費用だけ取られました😭',
    shareText: '知人紹介の弁護士は労働問題が専門外...😰\n会社側に太刀打ちできず交渉失敗💔\n弁護士費用だけ取られました😭\n\n#専門外 #弁護士選び',
    emoji: '⚠️',
    shareMessage: {
      icon: '⚠️',
      title: '誰かが専門外の弁護士で失敗しました...',
      subtitle: '専門性の大切さを学んだようです😢',
      color: 'text-orange-300',
      bgColor: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500'
    }
  },

  'client_lawyer_conflict': {
    title: '弁護士と対立して契約解除... - ブラック企業からの脱出',
    description: '弁護士の戦略に納得できず強く主張...😤 関係が破綻して契約解除に💔 新しい弁護士を探す羽目になりました😭',
    shareText: '弁護士の戦略に納得できず強く主張...😤\n関係が破綻して契約解除に💔\n新しい弁護士を探す羽目になりました😭\n\n#専門家を信じる #関係破綻',
    emoji: '🤝',
    shareMessage: {
      icon: '🤝',
      title: '誰かが弁護士と対立してしまいました...',
      subtitle: '専門家を信頼する大切さを学んだようです💦',
      color: 'text-red-300',
      bgColor: 'from-red-900/20 to-pink-900/20',
      borderColor: 'border-red-500'
    }
  },

  'intimidation_success': {
    title: '会社の脅迫に屈して低額和解... - ブラック企業からの脱出',
    description: '会社の脅迫に怖くなって妥協...😰 50万円の低額和解で終了💔 もっと粘れば良かったと後悔😭',
    shareText: '会社の脅迫に怖くなって妥協...😰\n50万円の低額和解で終了💔\nもっと粘れば良かったと後悔😭\n\n#脅迫 #低額和解',
    emoji: '😱',
    shareMessage: {
      icon: '😱',
      title: '誰かが脅迫に屈してしまいました...',
      subtitle: '勇気を持ち続ける大切さを学んだようです💦',
      color: 'text-purple-300',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500'
    }
  },

  'quick_low_settlement': {
    title: '安易な妥協で大幅に損をする... - ブラック企業からの脱出',
    description: '早く終わらせたくて100万円で合意...😢 本来なら400万円は取れたのに💔 もったいないことをしました😭',
    shareText: '早く終わらせたくて100万円で合意...😢\n本来なら400万円は取れたのに💔\nもったいないことをしました😭\n\n#安易な妥協 #機会損失',
    emoji: '💰',
    shareMessage: {
      icon: '💰',
      title: '誰かが妥協しすぎてしまいました...',
      subtitle: '粘り強さの大切さを痛感したようです💦',
      color: 'text-yellow-300',
      bgColor: 'from-yellow-900/20 to-orange-900/20',
      borderColor: 'border-yellow-500'
    }
  },

  'unfair_contract_terms': {
    title: '契約書の不利な条項を見落とす... - ブラック企業からの脱出',
    description: '和解契約書をざっと読んで署名...😰 不利な条項を見落として追加請求不可に💔 細かい確認が大切でした😭',
    shareText: '和解契約書をざっと読んで署名...😰\n不利な条項を見落として追加請求不可に💔\n細かい確認が大切でした😭\n\n#契約書 #確認不足',
    emoji: '📄',
    shareMessage: {
      icon: '📄',
      title: '誰かが契約書で失敗しました...',
      subtitle: '細部まで確認する大切さを学んだようです😱',
      color: 'text-blue-300',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500'
    }
  },
};

// デフォルト設定
export const defaultConfig: EndingConfig = {
  title: 'ブラック企業からの脱出 - 選択型ノベルゲーム',
  description: '残業地獄から脱出せよ！転職、労働組合、弁護士...あなたはどの道を選ぶ？リアルなブラック企業体験ゲーム🎮',
  shareText: 'ブラック企業からの脱出に挑戦中！🔥\n残業地獄から脱出できるかな？\nあなたも挑戦してみて！',
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
  good: ['parting_and_cry_then_jobhunt', 'company_wide_union', 'receive_settlement_money'],
  bad: [
    'work_alone_suffer', 'thirty_minutes_condition', 'punch_boss', 'health_breakdown',
    'mental_breakdown', 'job_search_burnout', 'evidence_discovered', 'lawyer_negotiation_breakdown',
    'union_info_leak', 'union_legal_mistake', 'union_crushed_early', 'informal_group_failure',
    'violent_confrontation', 'union_dissolution', 'union_split', 'union_internal_conflict',
    'weak_union_settlement', 'evidence_backfire', 'premature_expansion', 'small_union_success',
    'incompetent_lawyer', 'lawyer_refuses_case', 'lawyer_initial_consultation_bad',
    'client_lawyer_conflict', 'intimidation_success', 'quick_low_settlement', 'unfair_contract_terms'
  ]
};
