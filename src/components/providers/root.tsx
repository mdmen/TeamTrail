'use client';

import { PrimeReactProvider } from 'primereact/api';
import { StoreProvider } from './store';

export const RootProvider = ({ children }: ContainerWithChildren) => {
  return (
    <PrimeReactProvider>
      <StoreProvider>{children}</StoreProvider>
    </PrimeReactProvider>
  );
};
