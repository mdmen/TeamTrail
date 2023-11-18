import { PanelLayout } from '@/components/layouts';

interface FormLayoutProps {
  caption?: string;
  children: React.ReactNode;
}

export function FormLayout({ caption, children }: FormLayoutProps) {
  return (
    <PanelLayout className="mb-4">
      <main className="px-4 py-3">
        {!!caption && <h1 className="text-center text-2xl">{caption}</h1>}
        {children}
      </main>
    </PanelLayout>
  );
}
