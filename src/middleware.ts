import { type NextRequest } from 'next/server';
import { i18nMiddleware } from '@/lib/middlewares';

export function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
