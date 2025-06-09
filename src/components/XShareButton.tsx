import { getEndingConfig } from '@/data/metadata-config';

interface ShareButtonProps {
  endingType: 'good' | 'bad';
  routeType: 'overwork' | 'freedom' | 'reform';
  customText?: string;
}

export const XShareButton = ({ endingType, routeType, customText }: ShareButtonProps) => {
  const handleShare = () => {
    const baseUrl = window.location.origin;
    
    // 設定ファイルからデータを取得
    const config = getEndingConfig(routeType, endingType);
    
    // カスタムテキストまたは設定からのテキストを使用
    const shareText = customText || config.shareText;
    
    const fullText = `${config.emoji} ${shareText}\n\n#ブラック企業からの脱出\n\nあなたも挑戦してみませんか？`;
    
    // 短縮URL（メタデータ用）を使用
    const shareUrl = `${baseUrl}/s/${routeType}/${endingType}`;
    
    const encodedText = encodeURIComponent(fullText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    // X（旧Twitter）のシェアURL
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    
    // 新しいウィンドウで開く
    window.open(twitterShareUrl, '_blank', 'width=550,height=420');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 w-80 py-5 bg-black hover:bg-gray-800 text-white text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-600 hover:border-gray-400 whitespace-nowrap"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="text-white flex-shrink-0"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      <span>結果をXでシェアする</span>
    </button>
  );
};