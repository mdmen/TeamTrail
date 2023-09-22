import '@/styles/global.css';

export { metadata } from './meta';
import { RootProvider } from '@/components/providers';
import type { Locale } from '@/types';

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
