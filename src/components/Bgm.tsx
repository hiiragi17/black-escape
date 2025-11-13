import { useEffect, useRef } from "react";
import { useAudio } from "@/components/AudioComponents";

export function Bgm({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { settings } = useAudio();

  useEffect(() => {
    // 新しいsrcが来た時の処理
    if (audioRef.current) {
      // 既存の音声を停止
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // BGMが無効な場合は何もしない
    if (!settings.bgmEnabled) {
      return;
    }

    // 新しいAudioオブジェクトを作成
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = settings.bgmVolume;

    // 音声再生を試行
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        console.log(`BGM started: ${src}`);
      } catch (error) {
        console.error("BGM再生エラー:", error);
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
  }, [src, settings.bgmEnabled, settings.bgmVolume]);

  // BGM ON/OFF の監視
  useEffect(() => {
    if (audioRef.current) {
      if (settings.bgmEnabled) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [settings.bgmEnabled]);

  return null;
}