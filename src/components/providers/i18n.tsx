'use client';

import { I18nProviderClient } from '@/locales/client';
import type { Locale } from '@/types';

interface I18nProviderProps extends React.PropsWithChildren {
  locale: Locale;
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
