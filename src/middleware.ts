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
  publicRoutes: ['/:locale/sign-up', '/:locale/sign-in'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/'],
};
