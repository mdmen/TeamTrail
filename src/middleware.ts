import { type NextRequest } from 'next/server';
import { i18nMiddleware, i8nMatcher } from '@/lib/middlewares';

export function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  matcher: [i8nMatcher],
};
