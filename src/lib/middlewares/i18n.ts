import { createI18nMiddleware } from 'next-international/middleware';

export const i18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
});
