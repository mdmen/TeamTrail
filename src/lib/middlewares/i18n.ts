import { createI18nMiddleware } from 'next-international/middleware';

export const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
});

export const i8nMatcher =
  '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)' as const;
