import { persist } from 'zustand/middleware';
import { type StateCreator } from 'zustand';
import { appNamespace } from '@/lib';
import type { Scale, InputStyle, Theme, ThemeStyle } from '@/types';

export interface ConfigState {
  scale: Scale;
  inputStyle: InputStyle;
  theme: Theme;
  themeStyle: ThemeStyle;
  rippleEffect: boolean;
}

export interface ConfigActions {
  setScale: (scale: Scale) => void;
  setInputStyle: (inputStyle: InputStyle) => void;
  setTheme: (theme: Theme) => void;
  setThemeStyle: (themeStyle: ThemeStyle) => void;
  setRippleEffect: (rippleEffect: boolean) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

const getInitialConfigState = (): ConfigState => ({
  scale: 'regular',
  inputStyle: 'outlined',
  theme: 'lara-blue',
  themeStyle: 'light',
  rippleEffect: false,
});

export const createConfigSlice: StateCreator<
  ConfigSlice,
  [],
  [],
  ConfigSlice
> = (set) => ({
  ...getInitialConfigState(),
  setScale: (scale: Scale) => set({ scale }),
  setInputStyle: (inputStyle: InputStyle) => set({ inputStyle }),
  setTheme: (theme: Theme) => set({ theme }),
  setThemeStyle: (themeStyle: ThemeStyle) => set({ themeStyle }),
  setRippleEffect: (rippleEffect: boolean) => set({ rippleEffect }),
});

export const createPersistedConfigSlice = persist(createConfigSlice, {
  name: `${appNamespace}-config`,
  partialize: ({ scale, inputStyle, theme, themeStyle, rippleEffect }) => ({
    scale,
    inputStyle,
    theme,
    themeStyle,
    rippleEffect,
  }),
});
