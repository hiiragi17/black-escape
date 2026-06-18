import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://black-escape.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 開発用ページ・APIはクロール対象外
      disallow: ['/story-visualizer', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
