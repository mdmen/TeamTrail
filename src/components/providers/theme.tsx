'use client';

import { PrimeReactProvider } from 'primereact/api';

export const ThemeProvider = ({ children }: ContainerWithChildren) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};
