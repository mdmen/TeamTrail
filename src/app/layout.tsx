import '@/styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export { metadata } from './meta';
import { RootProvider } from '@/components/providers';

export default function RootLayout({ children }: ContainerWithChildren) {
  return (
    <html lang="en">
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
