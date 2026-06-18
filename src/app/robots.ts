import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://black-escape.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // OGP画像エンドポイントはSNSプレビュー用に明示的に許可（/api/ より優先）
      allow: ['/', '/api/og'],
      // 開発用ページ・その他APIはクロール対象外
      disallow: ['/story-visualizer', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
