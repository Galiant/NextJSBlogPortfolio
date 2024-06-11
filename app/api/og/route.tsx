import { siteConfig } from '@/config/site';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const interBoldFont = fetch(
  new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBoldFont;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title');

    if (!title) {
      return new Response('No title provided', { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw='flex relative flex-col p-12 w-full h-full items-start text-black bg-white'>
          <div tw='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <rect cx='42' cy='42' width='24' height='24' fill='black'></rect>
            </svg>
            <p tw='ml-2 font-bold text-2xl'>Antonijo Galic</p>
          </div>
          <div tw='flex flex-col flex-1 py-10'>
            <div tw='flex text-xl uppercase font-bold tracking-tight font-normal'>
              BLOG POST
            </div>
            <div tw='flex text-[80px] font-bold text-[50px]'>{heading}</div>
          </div>
          <div tw='flex self-end text-xl'>{siteConfig.url}</div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Inter',
            data: fontBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
