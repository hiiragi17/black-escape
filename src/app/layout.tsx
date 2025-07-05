import type { Metadata } from "next";
import { AudioProvider } from "@/components/AudioComponents";
import "./globals.css";

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