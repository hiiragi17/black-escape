import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ending = searchParams.get("ending") || "default";
  const route = searchParams.get("route") || "overwork";

  // エンディング別の画像ファイル名を決定
  const getImageFileName = () => {
    const key = `${route}-${ending}`;

    const imageMap: Record<string, string> = {
      "freedom-good": "beach.jpg",
      "overwork-bad": "bad_end_office.jpg",
    };

    return imageMap[key] || "og-image.jpg";
  };

  try {
    const imageFileName = getImageFileName();
    const imagePath = join(
      process.cwd(),
      "public",
      "images",
      "ogp",
      imageFileName
    );

    console.log(`Loading OGP image: ${imagePath}`);

    const imageBuffer = await readFile(imagePath);
    const getContentType = (filename: string) => {
      const ext = filename.toLowerCase().split(".").pop();
      switch (ext) {
        case "jpg":
        case "jpeg":
          return "image/jpeg";
        case "png":
          return "image/png";
        case "webp":
          return "image/webp";
        default:
          return "image/jpeg";
      }
    };

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": getContentType(imageFileName),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("OGP画像読み込みエラー:", error);

    try {
      const defaultPath = join(
        process.cwd(),
        "public",
        "images",
        "ogp",
        "og-image.jpg"
      );
      const defaultBuffer = await readFile(defaultPath);

      return new NextResponse(defaultBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (defaultError) {
      console.error("デフォルト画像も読み込み失敗:", defaultError);

      return new NextResponse("OGP image not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  }
}
