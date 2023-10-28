import { ThemeProvider } from './theme';
import { StoreProvider } from './store';
import { AuthProvider } from './auth';
import { I18nProvider } from './i18n';
import { GraphQLProvider } from './graphql';
import type { Locale } from '@/types';

interface RootProviderProps extends React.PropsWithChildren {
  locale: Locale;
}

export function RootProvider({ locale, children }: RootProviderProps) {
  return (
    <AuthProvider>
      <GraphQLProvider>
        <StoreProvider>
          <ThemeProvider>
            <I18nProvider locale={locale}>{children}</I18nProvider>
          </ThemeProvider>
        </StoreProvider>
      </GraphQLProvider>
    </AuthProvider>
  );
}
