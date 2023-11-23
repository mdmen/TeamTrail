import { persist } from 'zustand/middleware';
import { type StateCreator } from 'zustand';
import { appNamespace } from '@/lib/helpers';

export interface UIState {
  headerSearchHidden: boolean;
}

export interface UIActions {
  setHeaderSearchHidden: (headerSearchHidden: boolean) => void;
}

export type UISlice = UIState & UIActions;

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
  headerSearchHidden: true,
  setHeaderSearchHidden: (headerSearchHidden: boolean) =>
    set({ headerSearchHidden }),
});

export const createPersistedUISlice = persist(createUISlice, {
  name: `${appNamespace}-ui`,
  partialize: ({ headerSearchHidden }) => ({
    headerSearchHidden,
  }),
});
