'use client';

import { useState } from 'react';
import { Background } from "@/components/Background";
import Scene from "@/components/Scene";
import { Bgm } from '@/components/Bgm';
import { storyData } from "@/data/story";

export default function NovelPage() {
  const [scene, setScene] = useState<keyof typeof storyData>('start');
  const current = storyData[scene];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Scene scene={scene} setScene={setScene} />
      {current.background && <Background src={current.background} />}
      {current.bgm && <Bgm src={current.bgm} />}
    </main>
  );
}