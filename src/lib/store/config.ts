import { persist } from 'zustand/middleware';
import { type StateCreator } from 'zustand';
import { appNamespace } from '@/lib';
import type { Scale, InputStyle, Theme, ThemeStyle, Locale } from '@/types';

export interface ConfigState {
  scale: Scale;
  inputStyle: InputStyle;
  theme: Theme;
  themeStyle: ThemeStyle;
  rippleEffect: boolean;
  locale: Locale;
}

export interface ConfigActions {
  setScale: (scale: Scale) => void;
  setInputStyle: (inputStyle: InputStyle) => void;
  setTheme: (theme: Theme) => void;
  setThemeStyle: (themeStyle: ThemeStyle) => void;
  setRippleEffect: (rippleEffect: boolean) => void;
  setLocale: (locale: Locale) => void;
}

export type ConfigSlice = ConfigState & ConfigActions;

export const createConfigSlice: StateCreator<
  ConfigSlice,
  [],
  [],
  ConfigSlice
> = (set) => ({
  scale: 'regular',
  inputStyle: 'outlined',
  theme: 'lara-blue',
  themeStyle: 'light',
  rippleEffect: false,
  locale: 'en',
  setScale: (scale: Scale) => set({ scale }),
  setInputStyle: (inputStyle: InputStyle) => set({ inputStyle }),
  setTheme: (theme: Theme) => set({ theme }),
  setThemeStyle: (themeStyle: ThemeStyle) => set({ themeStyle }),
  setRippleEffect: (rippleEffect: boolean) => set({ rippleEffect }),
  setLocale: (locale: Locale) => set({ locale }),
});

export const createPersistedConfigSlice = persist(createConfigSlice, {
  name: `${appNamespace}-config`,
  partialize: ({
    scale,
    inputStyle,
    theme,
    themeStyle,
    rippleEffect,
    locale,
  }) => ({
    scale,
    inputStyle,
    theme,
    themeStyle,
    rippleEffect,
    locale,
  }),
});
