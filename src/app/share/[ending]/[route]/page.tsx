import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    ending: string;
    route: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ending, route } = await params;

  // エンディング別のメタデータ
  const metadataConfig = {
    "freedom-good": {
      title: "転職成功！ - ブラック企業からの脱出",
      description:
        "残業地獄から転職で脱出成功！✨ 新しい環境で働けることになりました💪",
    },
    "overwork-bad": {
      title: "過労で倒れました... - ブラック企業からの脱出",
      description:
        "過労で倒れてしまいました...💀 無理は禁物ですね。体調管理は大切だと学びました😢",
    },
  };

  const key = `${route}-${ending}` as keyof typeof metadataConfig;
  const config = metadataConfig[key] || {
    title: "ブラック企業からの脱出",
    description:
      "逃げ切って自由を手に入れろ！ブラック企業から脱出するノベルゲーム",
  };

  const ogImageUrl = `/api/og?ending=${encodeURIComponent(
    ending
  )}&route=${encodeURIComponent(route)}`;

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
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
    },
  };
}

export default async function SharePage({ params }: Props) {
  await params;
  redirect("/");
}
