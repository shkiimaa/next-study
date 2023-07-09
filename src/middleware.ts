import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  console.log('미들웨어 실행 체크');
  if (req.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉틩함');
    console.log(req.url);
    return NextResponse.redirect(new URL('/products', req.url));
  }
}

//특정 경로에서만 미들웨어 실행
export const config = {
  matcher: ['/products/:path+'],
};
