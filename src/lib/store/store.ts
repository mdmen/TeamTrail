import { createStore } from 'zustand';
import { createPersistedConfigSlice, type ConfigSlice } from './config';

export type Store = ConfigSlice;

export type StoreType = ReturnType<typeof initializeStore>;

export const initializeStore = (preloadedState: Partial<Store> = {}) => {
  return createStore<Store>((...args) => ({
    ...preloadedState,
    ...createPersistedConfigSlice(...args),
  }));
};
