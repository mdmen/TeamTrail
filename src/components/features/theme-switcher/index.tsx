'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/hooks';
import { Button, type ButtonProps } from '@/components/ui';
import { Sun, Moon } from '@/components/icons';

interface ThemeSwitcherProps extends ButtonProps {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useMounted();

  const isDark = resolvedTheme === 'dark';
  const label = isDark
    ? 'Switch to the light theme'
    : 'Switch to the dark theme';
  const icon = isDark ? <Moon size="1.7rem" /> : <Sun size="1.7rem" />;

  return (
    <Button
      rounded
      raised
      type="button"
      severity="secondary"
      aria-label={isMounted ? label : ''}
      icon={isMounted ? icon : <Sun />}
      {...props}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
    />
  );
}
