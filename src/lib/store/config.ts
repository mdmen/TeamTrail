import { persist } from 'zustand/middleware';
import { type StateCreator } from 'zustand';
import { appNamespace } from '@/lib/helpers';

export interface ConfigState {
  sidebarCollapsed: boolean;
}

export interface ConfigActions {
  setSidebarCollapsed: (sidebarCollapsed: boolean) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

export const createConfigSlice: StateCreator<
  ConfigSlice,
  [],
  [],
  ConfigSlice
> = (set) => ({
  sidebarCollapsed: false,
  setSidebarCollapsed: (sidebarCollapsed: boolean) => set({ sidebarCollapsed }),
});

export const createPersistedConfigSlice = persist(createConfigSlice, {
  name: `${appNamespace}-config`,
  partialize: ({ sidebarCollapsed }) => ({
    sidebarCollapsed,
  }),
});
