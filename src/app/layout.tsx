import { RootProvider } from '@/components/providers/root';
import type { Locale } from '@/types';

import '@/assets/styles/global.css';

interface RootLayoutProps extends ContainerWithChildren {
  params: { locale: Locale };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <head>
        <link
          id="theme-link"
          rel="stylesheet"
          href="/themes/lara-light-blue/theme.css"
        />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
