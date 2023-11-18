import { Header } from './components/header';

export default function WorkspacesLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Header />

      <div className="flex gap-4 px-2 pb-4 sm:px-4">{children}</div>
    </>
  );
}
