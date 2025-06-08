import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'

// ファイル拡張子から適切なContent-Typeを取得
const getContentType = (filename: string): string => {
  const ext = filename.toLowerCase().split('.').pop()
  switch (ext) {
    case 'jpg':
    case 'jpeg': 
      return 'image/jpeg'
    case 'png': 
      return 'image/png'
    case 'webp': 
      return 'image/webp'
    case 'gif': 
      return 'image/gif'
    case 'svg': 
      return 'image/svg+xml'
    default: 
      return 'image/jpeg'
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const ending = searchParams.get('ending') || 'default'
  const route = searchParams.get('route') || 'overwork'

  const getImageFileName = () => {
    const key = `${route}-${ending}`
    
    const imageMap: Record<string, string> = {
      'freedom-good': 'og_good_end_beach.jpg',
      'overwork-bad': 'og_bad_end_office.jpg',
    }
    
    return imageMap[key] || 'og-image.jpg'
  }

  try {
    const imageFileName = getImageFileName()
    const imagePath = join(process.cwd(), 'public', 'images', 'bg', imageFileName)
    
    console.log(`Loading OGP image: ${imagePath}`)
    
    const imageBuffer = await readFile(imagePath)
    const contentType = getContentType(imageFileName)
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('OGP画像読み込みエラー:', error)
    
    try {
      const defaultPath = join(process.cwd(), 'public', 'images', 'bg', 'og-image.jpg')
      const defaultBuffer = await readFile(defaultPath)
      
      console.log('デフォルト画像を使用:', defaultPath)
      
      return new NextResponse(defaultBuffer, {
        headers: {
          'Content-Type': getContentType('og-image.jpg'),
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      })
    } catch (defaultError) {
      console.error('デフォルト画像も読み込み失敗:', defaultError)
      
      return new NextResponse('OGP image not found', { 
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      })
    }
  }
}