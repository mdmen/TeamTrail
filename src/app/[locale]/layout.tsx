import { RootProvider } from '@/components/providers/root';
import { fontInter, fontCoiny } from './fonts';
import { cn } from '@/lib/helpers';
import type { Locale } from '@/types';

import '@/assets/styles/global.css';

export { generateMetadata } from './meta';

interface RootLayoutProps extends React.PropsWithChildren {
  params: { locale: Locale };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={cn(fontInter.variable, fontCoiny.variable)}
    >
      <body>
        <RootProvider locale={locale}>{children}</RootProvider>
      </body>
    </html>
  );
}
