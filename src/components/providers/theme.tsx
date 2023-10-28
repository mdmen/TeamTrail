'use client';

import { PrimeReactProvider } from 'primereact/api';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <NextThemesProvider
        attribute="class"
        enableSystem
        enableColorScheme
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </PrimeReactProvider>
  );
}
