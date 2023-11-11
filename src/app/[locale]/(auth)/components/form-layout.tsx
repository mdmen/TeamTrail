interface FormLayoutProps {
  caption?: string;
  children: React.ReactNode;
}

export function FormLayout({ caption, children }: FormLayoutProps) {
  return (
    <main className="mb-4 p-8">
      {!!caption && <h1 className="text-center text-2xl">{caption}</h1>}
      {children}
    </main>
  );
}
