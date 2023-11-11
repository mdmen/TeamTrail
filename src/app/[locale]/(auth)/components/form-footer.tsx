import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';

export function FormFooter({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex items-center justify-between">
      {children}
      <div className="flex gap-3">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
