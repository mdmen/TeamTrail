'use client';

import { PrimeReactProvider } from 'primereact/api';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};
