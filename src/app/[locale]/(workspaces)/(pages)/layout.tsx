import { PanelLayout } from '@/components/layouts';
import { Footer } from '../components/footer';

export default function WorkspacesLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <PanelLayout className="w-[80rem] max-w-full">
        <main>{children}</main>
      </PanelLayout>
      <Footer />
    </div>
  );
}
