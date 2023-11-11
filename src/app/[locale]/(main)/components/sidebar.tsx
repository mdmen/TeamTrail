import { PanelLayout } from '@/components/layouts';
import { Navigation } from './navigation';
import { Workspace } from './workspace';

export function Sidebar({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) {
  return (
    <aside {...props}>
      <PanelLayout className="mb-4">
        <Workspace />
      </PanelLayout>
      <PanelLayout className="flex-column flex">
        <nav className="w-full">
          <Navigation />
        </nav>
      </PanelLayout>

      {children}
    </aside>
  );
}
