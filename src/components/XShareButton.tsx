interface ShareButtonProps {
  endingType: "good" | "bad";
  routeType: "overwork" | "freedom" | "reform";
  customText?: string;
}
import { useRouter } from "next/navigation";

export const XShareButton = ({
  endingType,
  routeType,
  customText,
}: ShareButtonProps) => {
  const router = useRouter();

  // エンディング別のシェアテキスト
  const getShareText = () => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

    const endingMessages = {
      "freedom-good": {
        text: "残業地獄から転職で脱出成功！✨\n新しい環境で働けることになりました💪",
        emoji: "🌟",
      },
      "overwork-bad": {
        text: "過労で倒れてしまいました...💀\n無理は禁物ですね。体調管理は大切だと学びました😢",
        emoji: "💀",
      },
    };

    const key = `${routeType}-${endingType}` as keyof typeof endingMessages;
    const ending = endingMessages[key] || {
      text: "ブラック企業からの脱出に挑戦しました！",
      emoji: "🎮",
    };

    const shareText = customText || ending.text;

    return {
      text: `${ending.emoji} ${shareText}\n\n#ブラック企業からの脱出\n\nあなたも挑戦してみませんか？\n${baseUrl}`,
      url: baseUrl,
    };
  };

  const handleShare = () => {
    const { text, url } = getShareText();
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);

    const shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

    window.open(shareUrl, "_blank", "width=550,height=420");
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
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      <span>結果をXでシェアする</span>
    </button>
  );
};
