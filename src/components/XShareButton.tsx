interface ShareButtonProps {
  endingType: 'good' | 'bad' | 'normal';
  routeType: 'overwork' | 'freedom' | 'reform';
  customText?: string;
}

export const XShareButton = ({ endingType, routeType, customText }: ShareButtonProps) => {
  // エンディング別のシェアテキスト
  const getShareText = () => {
    const baseUrl = window.location.origin;
    const gameTitle = "ブラック企業からの脱出";
    
    const endingMessages = {
      // 転職成功系
      'overwork-good': {
        text: "残業地獄から転職で脱出成功！✨\n新しい環境で働けることになりました💪",
        hashtags: ["ブラック企業脱出", "転職成功", "残業地獄からの解放"],
        emoji: "🌟"
      },
      'freedom-good': {
        text: "理不尽な飲み会を断って転職成功！🍻→❌\n自分の時間を大切にできる会社に転職できました✨",
        hashtags: ["飲み会強要拒否", "転職成功", "ワークライフバランス"],
        emoji: "🕊️"
      },
      
      // 労基署改革成功
      'reform-good': {
        text: "労基署への相談で会社改革成功！📋✨\n証拠をしっかり集めて、働きやすい環境を実現しました💪",
        hashtags: ["労基署", "会社改革", "証拠収集", "労働環境改善"],
        emoji: "⚖️"
      },
      
      // バッドエンド系
      'overwork-bad': {
        text: "過労で倒れてしまいました...💀\n無理は禁物ですね。体調管理は大切だと学びました😢",
        hashtags: ["過労注意", "体調管理", "無理は禁物"],
        emoji: "💀"
      },
      'freedom-bad': {
        text: "転職活動がバレて妨害されました...😰\n慎重な行動が必要だったみたいです💦",
        hashtags: ["転職活動", "慎重に行動", "準備大切"],
        emoji: "😰"
      },
      'reform-bad': {
        text: "労基署への相談で証拠不足...📋❌\n事前の証拠収集が重要だと学びました💦",
        hashtags: ["証拠不足", "労基署", "準備大切"],
        emoji: "📋"
      }
    };

    const key = `${routeType}-${endingType}` as keyof typeof endingMessages;
    const ending = endingMessages[key] || {
      text: "ブラック企業からの脱出に挑戦しました！",
      hashtags: ["ブラック企業脱出"],
      emoji: "🎮"
    };

    const shareText = customText || ending.text;
    const hashtags = ending.hashtags.join(' #');
    
    return {
      text: `${ending.emoji} ${shareText}\n\n#${hashtags}\n\nあなたも挑戦してみませんか？\n${baseUrl}`,
      url: baseUrl
    };
  };

  const handleShare = () => {
    const { text, url } = getShareText();
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);
    
    // X（旧Twitter）のシェアURL
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    
    // 新しいウィンドウで開く
    window.open(shareUrl, '_blank', 'width=550,height=420');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-600"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="text-white"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      結果をXでシェア
    </button>
  );
};