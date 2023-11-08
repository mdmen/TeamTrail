import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';
import { PanelLayout } from '@/components/ui';

interface FormLayoutProps {
  caption?: string;
  children: React.ReactNode;
}

export function FormLayout({ caption, children }: FormLayoutProps) {
  return (
    <main>
      <PanelLayout className="mb-4 p-8">
        {!!caption && <h1 className="text-center text-2xl">{caption}</h1>}
        {children}
      </PanelLayout>
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
