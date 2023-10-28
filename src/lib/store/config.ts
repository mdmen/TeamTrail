import { persist } from 'zustand/middleware';
import { type StateCreator } from 'zustand';
import { appNamespace } from '@/lib/helpers';
import type { Scale } from '@/types';

export interface ConfigState {
  scale: Scale;
}

export interface ConfigActions {
  setScale: (scale: Scale) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

export const createConfigSlice: StateCreator<
  ConfigSlice,
  [],
  [],
  ConfigSlice
> = (set) => ({
  scale: 'regular',
  setScale: (scale: Scale) => set({ scale }),
});

export const createPersistedConfigSlice = persist(createConfigSlice, {
  name: `${appNamespace}-config`,
  partialize: ({ scale }) => ({
    scale,
  }),
});
