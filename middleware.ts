import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('remember_token');
  const response = NextResponse;
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return response.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/dashboard', '/board'],
};
