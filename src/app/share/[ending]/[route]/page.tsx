import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{
    ending: string
    route: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ending, route } = await params
  
  // エンディング別のメタデータ
  const metadataConfig = {
    'freedom-good': {
      title: '転職成功！ - ブラック企業からの脱出',
      description: '残業地獄から転職で脱出成功！✨ 新しい環境で働けることになりました💪'
    },
    'overwork-bad': {
      title: '過労で倒れました... - ブラック企業からの脱出',
      description: '過労で倒れてしまいました...💀 無理は禁物ですね。体調管理は大切だと学びました😢'
    }
  }

  const key = `${route}-${ending}` as keyof typeof metadataConfig
  const config = metadataConfig[key] || {
    title: 'ブラック企業からの脱出',
    description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム'
  }

  const ogImageUrl = `/api/og?ending=${ending}&route=${route}`

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
    },
  }
}

export default async function SharePage({ params }: Props) {
  const { ending } = await params
  
  // リダイレクトせず、ゲームへのリンクを表示
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">ブラック企業からの脱出</h1>
        <p className="text-xl text-gray-300">
          {ending === 'good' ? '脱出成功の結果をシェアしました！他のエンドも是非見てください！' : '脱出失敗の結果をシェアしました……次こそ脱出だ！'}
        </p>
          <br />
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
          >
            🏢 トップページへ
          </Link>
        </div>
      </div>
  )
}