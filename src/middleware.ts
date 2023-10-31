import { NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';
import { authMiddleware } from '@clerk/nextjs';
import type { Locale } from './types';

const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'] satisfies Locale[],
  defaultLocale: 'en',
});

export default authMiddleware({
  beforeAuth: (req) => {
    return i18nMiddleware(req);
  },
  afterAuth({ userId, isPublicRoute }, req) {
    if (!isPublicRoute && !userId) {
      return NextResponse.redirect(
        new URL(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL as string, req.url),
      );
    } else if (isPublicRoute && userId) {
      return NextResponse.redirect(
        new URL(
          process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL as string,
          req.url,
        ),
      );
    }
  },
  publicRoutes: [
    '/:locale/sign-up',
    '/:locale/sign-up/verify',
    '/:locale/sign-in',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/'],
};
