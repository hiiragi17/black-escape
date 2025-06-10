import type { Metadata } from "next";
import { AudioProvider } from "@/components/AudioComponents";
import "./globals.css";

export const metadata: Metadata = {
  title: 'ブラック企業からの脱出',
  description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
  openGraph: {
    title: 'ブラック企業からの脱出',
    description: '逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム',
    url: 'https://black-escape.vercel.app',
    siteName: 'ブラック企業からの脱出',
    images: [
      {
        url: '/api/og',
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
    images: ['/api/og'],
    creator: '@hiiragi_en17',
  },
  metadataBase: new URL('https://black-escape.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  )
}