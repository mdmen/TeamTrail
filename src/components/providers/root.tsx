import { ThemeProvider } from './theme';
import { StoreProvider } from './store';
import { SessionProvider } from './session';
import { I18nProvider } from './i18n';

export const RootProvider = ({ children }: ContainerWithChildren) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </StoreProvider>
    </SessionProvider>
  );
};
