'use client';

import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Background } from '@/components/Background';
import { getEndingConfig } from '@/data/metadata-config';
import Link from 'next/link';

// SearchParamsを使用するコンポーネントを分離
function ShareMessageContent() {
  const searchParams = useSearchParams();
  const ending = searchParams.get('ending');

  // シェアメッセージの取得
  const shareMessage = ending ? getEndingConfig(ending).shareMessage : null;

  if (!shareMessage) return null;

  return (
    <div className="mb-6 transition-all duration-1000 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 backdrop-blur-md border-l-4 border-blue-500 shadow-2xl border border-white/20 opacity-100 translate-y-0">
      <div className="text-center space-y-3">
        <p className={`text-xl font-bold ${shareMessage.color} drop-shadow-lg`}>
          {shareMessage.icon} {shareMessage.title}
        </p>
        <p className="text-base text-gray-200 font-medium drop-shadow-md">
          {shareMessage.subtitle}
        </p>
        <div className="pt-2">
          <p className="text-sm text-white/90 font-semibold bg-white/10 rounded-lg py-2 px-4 inline-block backdrop-blur-sm border border-white/20">
            🎮 あなたも挑戦してみませんか？
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  // パーティクルエフェクト用の固定位置を生成
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    // タイトルを段階的に表示
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setShowButtons(true), 1500);
    
    // パーティクル初期化（クライアントサイドのみ）
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
          duration: `${2 + Math.random() * 2}s`
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* 背景画像 */}
      <Background src="/images/bg/night_office.jpg" />
      
      {/* パーティクルエフェクト */}
      <div className="absolute inset-0 z-5">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
      
      {/* メインコンテンツ */}
      <div className="relative z-30 text-white px-4">
        {/* シェア経由の場合の特別メッセージ */}
        <Suspense fallback={null}>
          <ShareMessageContent />
        </Suspense>
        
        {/* タイトルロゴ */}
        <div className={`mb-8 transition-all duration-1000 bg-gradient-to-br from-black/60 via-gray-900/50 to-black/60 rounded-xl p-8 backdrop-blur-md border border-white/10 shadow-2xl ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-300 to-orange-400 drop-shadow-2xl mb-4 tracking-wider animate-pulse filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            ブラック企業からの脱出
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6 animate-pulse" />
          <p className="text-xl md:text-2xl text-gray-100 font-semibold tracking-wide drop-shadow-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            逃げ切って自由を手に入れろ！
          </p>
        </div>
        
        {/* メニューボタン */}
        <div className={`space-y-4 transition-all duration-1000 delay-500 bg-gradient-to-br from-gray-900/70 via-black/60 to-gray-900/70 rounded-xl p-6 backdrop-blur-lg border border-white/20 shadow-2xl ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            href="/novel" 
            className="block mx-auto w-64 py-4 px-8 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/20 hover:shadow-blue-500/50 backdrop-blur-sm"
          >
            ⚡ ゲームスタート
          </Link>
          <Link 
            href="/settings"
            className="block mx-auto w-64 py-3 px-8 bg-gray-800/70 hover:bg-gray-700/80 text-white text-lg font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-500/50 hover:border-gray-400/70 backdrop-blur-sm"
          >
            ⚙️ 設定
          </Link>
          {/* 音楽の注意書き */}
          <div className="mt-6 bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-2 text-amber-200">
              <span className="text-lg">♫</span>
              <div className="text-center">
                <p className="text-sm font-medium">このゲームは音が出ます</p>
                <p className="text-xs text-amber-300">設定画面で音量調整ができます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* コーナー装飾 */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-red-500 opacity-40 z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-orange-500 opacity-40 z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-yellow-500 opacity-40 z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-red-500 opacity-40 z-10" />
    </main>
  );
}