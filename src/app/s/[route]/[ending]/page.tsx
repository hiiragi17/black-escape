import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getEndingConfig } from '@/data/metadata-config'

interface Props {
  params: Promise<{
    ending: string // endingIdとして使用
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ending } = await params
  const config = getEndingConfig(ending) // 1つの引数のみ
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://black-escape.vercel.app'
  const ogImageUrl = `${baseUrl}/api/og?ending=${ending}`
  const homeUrl = `${baseUrl}/?ending=${ending}`

  return {
    title: config.title,
    description: config.description,
    keywords: 'ゲーム,ノベルゲーム,ブラック企業,脱出,転職',
    
    openGraph: {
      title: config.title,
      description: config.description,
      url: homeUrl,
      siteName: 'ブラック企業からの脱出',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      type: 'website',
      locale: 'ja_JP',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
      creator: '@hiiragi_en17',
    },
    
    robots: {
      index: false,
      follow: false,
    },
    
    other: {
      'og:image:width': '1200',
      'og:image:height': '630',
      'twitter:image:width': '1200',
      'twitter:image:height': '630',
    },
  }
}

export default async function SharePage({ params }: Props) {
  const { ending } = await params
  
  // endingIdのみを使用してリダイレクト
  redirect(`/?ending=${ending}`)
}