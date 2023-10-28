import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col content-center items-center justify-center p-4 py-8">
      <div className="w-full max-w-lg">
        <main className="mb-4 rounded-lg bg-[--surface-card] p-8 shadow-md">
          {children}
        </main>
        <footer className="flex justify-end gap-3">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </footer>
      </div>
    </div>
  );
}
