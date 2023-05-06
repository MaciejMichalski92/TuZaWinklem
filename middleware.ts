import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { isBot, device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  url.searchParams.set('viewport', viewport);
  url.searchParams.set('isBot', `${isBot}`);

  return NextResponse.rewrite(url);
}
