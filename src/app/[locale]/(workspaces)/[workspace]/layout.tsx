import { PanelLayout } from '@/components/layouts';
import { Navigation } from './components/navigation';
import { Workspace } from './components/workspace';
import { Footer } from '../components/footer';

export default function WorkspaceLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-nowrap gap-4">
      <aside className="flex w-min flex-col gap-4">
        <Workspace code="asdsd" />
        <Navigation workspaceCode="asdsd" />
      </aside>
      <div className="flex grow flex-col gap-4">
        <PanelLayout>
          <main>{children}</main>
        </PanelLayout>
        <Footer />
      </div>
    </div>
  );
}
