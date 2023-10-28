'use client';

import { createContext, useRef } from 'react';
import { type StoreType, initializeStore } from '@/lib/store';

export const StoreContext = createContext<StoreType | null>(null);

export function StoreProvider({ children, ...props }: React.PropsWithChildren) {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}
