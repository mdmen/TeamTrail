import { createStore } from 'zustand';
import { createPersistedUISlice, type UISlice } from './ui';

export type Store = UISlice;

export type StoreType = ReturnType<typeof initializeStore>;

export const initializeStore = (preloadedState: Partial<Store> = {}) => {
  return createStore<Store>((...args) => ({
    ...preloadedState,
    ...createPersistedUISlice(...args),
  }));
};
