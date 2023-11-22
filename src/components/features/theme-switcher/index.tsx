'use client';

import { useTheme } from 'next-themes';
import { useMounted } from '@/lib/hooks';
import { Button, type ButtonProps } from 'primereact/button';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitcherProps extends ButtonProps {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useMounted();

  const isDark = resolvedTheme === 'dark';
  const icon = isDark ? <Moon size="1.7rem" /> : <Sun size="1.7rem" />;

  return (
    <Button
      type="button"
      aria-label="Toggle theme"
      icon={isMounted ? icon : <Sun size="1.7rem" />}
      {...props}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
    />
  );
}
