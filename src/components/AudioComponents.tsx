'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AudioSettings {
  bgmEnabled: boolean;
  bgmVolume: number;
}

interface AudioContextType {
  settings: AudioSettings;
  setBgmEnabled: (enabled: boolean) => void;
  setBgmVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AudioSettings>({
    bgmEnabled: true,
    bgmVolume: 0.5,
  });

  // ローカルストレージから設定を読み込み
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('audioSettings');
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          setSettings(parsed);
        } catch (error) {
          console.error('音声設定の読み込みエラー:', error);
        }
      }
    }
  }, []);

  // 設定変更時にローカルストレージに保存
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioSettings', JSON.stringify(settings));
    }
  }, [settings]);

  const setBgmEnabled = (enabled: boolean) => {
    setSettings(prev => ({ ...prev, bgmEnabled: enabled }));
  };

  const setBgmVolume = (volume: number) => {
    setSettings(prev => ({ ...prev, bgmVolume: volume }));
  };

  return (
    <AudioContext.Provider value={{
      settings,
      setBgmEnabled,
      setBgmVolume,
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}