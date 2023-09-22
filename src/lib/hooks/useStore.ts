import { useContext } from 'react';
import { useStore as useZustandStore } from 'zustand';
import { StoreContext } from '@/components/providers';
import type { Store } from '@/lib/store';

export const useStore = <T>(selector: (state: Store) => T) => {
  const store = useContext(StoreContext);

  if (!store) throw Error('Store is missing the provider');

  return useZustandStore(store, selector);
};
