import { createI18nClient } from 'next-international/client';
import type { Locale } from '@/types';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import('./en'),
  ru: () => import('./ru'),
} satisfies Record<Locale, () => Promise<unknown>>);
