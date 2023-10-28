'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/hooks';
import { Button } from '@/components/ui';
import { Sun, Moon } from '@/components/icons';

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useMounted();

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  const icon = isDark ? <Moon /> : <Sun />;

  return (
    <Button
      rounded
      raised
      type="button"
      severity="secondary"
      aria-label={isMounted ? label : ''}
      icon={isMounted ? icon : <Sun />}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
    />
  );
}
