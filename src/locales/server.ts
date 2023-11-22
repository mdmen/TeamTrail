import { createI18nServer } from 'next-international/server';
import type { Locale } from '@/types';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import('./en'),
    ru: () => import('./ru'),
  } satisfies Record<Locale, () => Promise<unknown>>);
