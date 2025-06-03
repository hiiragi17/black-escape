'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { storyData } from '@/data/story';

interface SceneProps {
  scene: keyof typeof storyData;
  setScene: (scene: keyof typeof storyData) => void;
}

export default function Scene({ scene, setScene }: SceneProps) {
  const [showText, setShowText] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [textDisplayed, setTextDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const current = storyData[scene];
  const router = useRouter();

  // タイピングアニメーション
  useEffect(() => {
    setShowText(false);
    setShowChoices(false);
    setTextDisplayed('');
    setIsTyping(true);
    
    const timer1 = setTimeout(() => setShowText(true), 500);
    
    // タイピング効果
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < current.text.length) {
        setTextDisplayed(current.text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingTimer);
        setIsTyping(false);
        setTimeout(() => setShowChoices(true), 800);
      }
    }, 40);
    
    return () => {
      clearTimeout(timer1);
      clearInterval(typingTimer);
    };
  }, [scene, current.text]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      
      {/* パーティクルエフェクト */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* メインコンテンツエリア */}
      <div className="flex-1 flex items-end justify-center pb-8 px-4 relative z-10">
        {/* テキストボックス */}
        <div className={`w-full max-w-5xl transition-all duration-700 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            {/* メインテキストボックス */}
            <div className="bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90 border-2 border-gray-300/40 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
              {/* ヘッダー装飾 */}
              <div className="flex items-center justify-start mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100" />
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200" />
                </div>
              </div>
              
              {/* テキスト表示エリア */}
              <div className="min-h-[140px] flex items-center">
                <p className="text-white text-xl md:text-2xl leading-relaxed font-medium tracking-wide">
                  {textDisplayed}
                  {isTyping && (
                    <span className="inline-block w-3 h-7 bg-white ml-2 animate-pulse" />
                  )}
                </p>
              </div>
              
              {/* 選択肢エリア */}
              {current.choices.length > 0 ? (
                <div className={`mt-8 space-y-4 transition-all duration-700 delay-500 ${showChoices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <div className="text-gray-300 text-sm mb-4 font-medium">▼ 選択してください</div>
                  {current.choices.map((choice, index) => (
                    <button
                      key={index}
                      className="group block w-full text-left p-5 bg-gradient-to-r from-blue-600/70 to-purple-600/70 hover:from-blue-500/80 hover:to-purple-500/80 text-white text-lg font-semibold rounded-xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 border border-white/20 hover:border-white/50 hover:shadow-blue-500/20"
                      onClick={() => setScene(choice.next as keyof typeof storyData)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center">
                        <span className="text-blue-200 mr-4 text-xl group-hover:text-white transition-colors duration-300">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {choice.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                /* エンディング時のボタン */
                <div className={`mt-8 flex justify-center transition-all duration-700 delay-500 ${showChoices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                  <button
                    className="px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-500/50 hover:border-gray-400/70"
                    onClick={() => router.push('/')}
                  >
                    <span className="mr-3">🏠</span>
                    タイトルに戻る
                  </button>
                </div>
              )}
            </div>
            
            {/* 装飾的な影 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
      
      {/* UI情報 */}
      <div className="absolute top-6 left-6 text-white/60 text-sm font-mono bg-black/50 px-3 py-2 rounded">
        Scene: {scene}
      </div>
      
      {/* コーナー装飾 */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-lg" />
    </div>
  );
}