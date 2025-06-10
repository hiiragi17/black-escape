// app/settings/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/components/AudioComponents';
import { Background } from '@/components/Background';

export default function SettingsPage() {
  const { 
    settings, 
    setBgmEnabled, 
    setBgmVolume
  } = useAudio();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景画像 */}
      <Background src="/images/bg/night_office.jpg" />
      
      {/* メインコンテンツ */}
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center text-white p-8">
        <div className="max-w-4xl w-full bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 rounded-xl p-8 backdrop-blur-md border border-white/20 shadow-2xl">
          
          {/* ヘッダー */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              ⚙️ 設定
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 音楽設定 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-blue-300">🎧 音楽設定</h2>
              
              <div className="space-y-6">
                {/* BGM ON/OFF */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">BGM</h3>
                    <p className="text-sm text-gray-400">背景音楽の再生</p>
                  </div>
                  <button
                    onClick={() => setBgmEnabled(!settings.bgmEnabled)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      settings.bgmEnabled ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.bgmEnabled ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* BGM音量 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-lg font-semibold">BGM音量</label>
                    <span className="text-blue-300 font-mono">
                      {Math.round(settings.bgmVolume * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.bgmVolume}
                    onChange={(e) => setBgmVolume(parseFloat(e.target.value))}
                    disabled={!settings.bgmEnabled}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* クレジット情報 */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-purple-300">💎 クレジット</h2>
              
              <div className="space-y-6">
                {/* 開発 */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">👨‍💻 開発</h3>
                  <p className="text-gray-300">hiiragi</p>
                </div>

                {/* 背景画像 */}
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">🎨 背景画像</h3>
                  <div className="text-gray-300">
                    <p className="font-medium">みんちりえ様</p>
                    <a 
                      href="https://min-chi.material.jp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline break-all"
                    >
                      https://min-chi.material.jp/
                    </a>
                  </div>
                </div>

                {/* 音楽 */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">🎸 音楽</h3>
                  <div className="text-gray-300">
                    <p className="font-medium">フリー音楽素材 H/MIX GALLERY</p>
                    <p className="text-sm text-gray-400">管理者：秋山裕和様</p>
                    <a 
                      href="http://www.hmix.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline break-all"
                    >
                      http://www.hmix.net/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* スペシャルサンクス */}
          <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              🙏 Special Thanks
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-pink-300 mb-3">素材提供者の皆様</h3>
                <div className="text-gray-300 space-y-2">
                  <p className="text-sm">美しい背景画像を提供してくださった</p>
                  <p className="font-medium text-green-300">みんちりえ様</p>
                  <p className="text-sm">素晴らしい音楽を提供してくださった</p>
                  <p className="font-medium text-yellow-300">秋山裕和様</p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">プレイヤーの皆様</h3>
                <div className="text-gray-300 space-y-2">
                  <p className="text-sm">このゲームをプレイしてくださる</p>
                  <p className="font-medium text-blue-300">あなた</p>
                  <p className="text-sm">そして全てのプレイヤーの皆様に</p>
                  <p className="font-medium text-red-300">心から感謝いたします</p>
                </div>
              </div>
            </div>
          </div>

          {/* ゲーム情報 */}
          <div className="mt-8 bg-gray-800/50 p-6 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-red-300">ℹ️ ゲーム情報</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300">
                  <strong>バージョン:</strong> v1.0.0
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>リリース:</strong> 2025年
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  このゲームはフィクションです。<br />
                  実在の人物・団体とは関係ありません。
                </p>
              </div>
            </div>
          </div>

          {/* 戻るボタン */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏠 トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </main>
  );
}