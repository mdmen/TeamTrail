import { getCurrentYear } from '@/lib/helpers';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

export default function MainPageLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header className="mb-4" />
      <div className="flex flex-nowrap gap-4 pb-4">
        <Sidebar className="ml-4 w-80" />

        <div className="mr-4">
          <main>{children}</main>

          <footer>
            <p>© {getCurrentYear()} Dmitry Menovshchikov</p>
          </footer>
        </div>
      </div>
    </>
  );
}
