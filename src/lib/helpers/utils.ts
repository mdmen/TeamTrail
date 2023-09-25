import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme, ThemeStyle } from '@/types';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function getThemeName(theme: Theme, themeStyle: ThemeStyle): string {
  const themes = {
    'lara-blue': `lara-${themeStyle}-blue`,
  };

  return themes[theme];
}
