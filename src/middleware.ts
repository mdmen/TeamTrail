import { NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';
import { authMiddleware } from '@clerk/nextjs';
import type { Locale } from './types';
import { envPublicSchema } from './env/public';

const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'] satisfies Locale[],
  defaultLocale: 'en',
});

export default authMiddleware({
  beforeAuth: (req) => {
    return i18nMiddleware(req);
  },
  afterAuth({ userId, isPublicRoute }, { url }) {
    if (!isPublicRoute && !userId) {
      return NextResponse.redirect(new URL(envPublicSchema.SIGN_IN_URL, url));
    } else if (isPublicRoute && userId) {
      return NextResponse.redirect(
        new URL(envPublicSchema.AFTER_SIGN_IN_URL, url),
      );
    }
  },
  publicRoutes: [
    '/:locale/sign-up',
    '/:locale/sign-in',
    '/:locale/oauth-callback',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)'],
};
