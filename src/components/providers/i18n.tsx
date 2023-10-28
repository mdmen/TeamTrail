'use client';

import { I18nProviderClient } from '@/locales/client';
import { Spinner } from '@/components/ui';
import type { Locale } from '@/types';

interface I18nProviderProps extends React.PropsWithChildren {
  locale: Locale;
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
  return (
    <I18nProviderClient fallback={<Spinner fullscreen />} locale={locale}>
      {children}
    </I18nProviderClient>
  );
}
