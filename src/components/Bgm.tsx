import { useEffect, useRef } from "react";

export function Bgm({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 新しいsrcが来た時の処理
    if (audioRef.current) {
      // 既存の音声を停止
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // 新しいAudioオブジェクトを作成
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // 音量を50%に設定

    // 音声再生を試行
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        console.log(`BGM started: ${src}`);
      } catch (error) {
        console.error("BGM再生エラー:", error);
        // ユーザーインタラクションが必要な場合のメッセージ
        console.log("ユーザーがページをクリックした後に音声が再生されます");
      }
    };

    playAudio();

    // クリーンアップ関数
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [src]);

  return null;
}