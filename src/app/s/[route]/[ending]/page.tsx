import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getEndingConfig } from '@/data/metadata-config'

interface Props {
  params: Promise<{
    ending: string
    route: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ending, route } = await params
  const config = getEndingConfig(route, ending)
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://black-escape.vercel.app'
  const ogImageUrl = `${baseUrl}/api/og?ending=${ending}&route=${route}`
  const homeUrl = `${baseUrl}/?ending=${ending}&route=${route}`

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
      index: false, // SEOでインデックスしない（リダイレクト用ページなので）
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
  const { ending, route } = await params
  
  // トップページにリダイレクト（パラメータ付き）
  redirect(`/?ending=${ending}&route=${route}`)
}