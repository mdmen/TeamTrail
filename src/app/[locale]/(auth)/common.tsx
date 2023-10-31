import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';

interface FormLayoutProps {
  caption: string;
  children: React.ReactNode;
}

export function FormLayout({ caption, children }: FormLayoutProps) {
  return (
    <main className="mb-4 rounded-lg bg-[--surface-card] p-8 shadow-md">
      <h1 className="text-center text-2xl">{caption}</h1>
      {children}
    </main>
  );
}

export function FormFooter({ children }: { children: React.ReactNode }) {
  return (
    <footer className="flex items-center justify-between">
      <p>{children}</p>
      <div className="flex gap-3">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
