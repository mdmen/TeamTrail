import { PanelLayout } from '@/components/layouts';
import { Footer } from '../components/footer';

export default function WorkspacesLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <PanelLayout className="w-min max-w-full py-8">
        <main>{children}</main>
      </PanelLayout>
      <Footer />
    </div>
  );
}
