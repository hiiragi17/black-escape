// app/page.tsx
import { Metadata } from 'next'
import { getEndingConfig } from '@/data/metadata-config'
import HomePage from './HomePage'

interface Props {
  searchParams: Promise<{ ending?: string, route?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { ending } = await searchParams

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://black-escape.vercel.app'

  // シェア経由の場合は動的メタデータ
  if (ending) {
    const config = getEndingConfig(ending)
    const ogImageUrl = `${baseUrl}/api/og?ending=${ending}`

    console.log('🏠 Homepage dynamic metadata:', { ending, ogImageUrl })

    return {
      title: config.title,
      description: config.description,
      openGraph: {
        title: config.title,
        description: config.description,
        url: baseUrl,
        siteName: 'ブラック企業からの脱出',
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: config.title,
          },
        ],
        locale: 'ja_JP',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: config.title,
        description: config.description,
        images: [ogImageUrl],
        creator: '@hiiragi_en17',
      },
      metadataBase: new URL(baseUrl),
    }
  }

  // デフォルトメタデータ
  console.log('🏠 Homepage default metadata')
  return {
    title: 'ブラック企業からの脱出',
    description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
    openGraph: {
      title: 'ブラック企業からの脱出',
      description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
      url: baseUrl,
      siteName: 'ブラック企業からの脱出',
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: 'ブラック企業からの脱出',
        },
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ブラック企業からの脱出',
      description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
      images: [`${baseUrl}/api/og`],
      creator: '@hiiragi_en17',
    },
    metadataBase: new URL(baseUrl),
  }
}

// 既存のコンポーネントを使用
export default function Page() {
  return <HomePage />
}