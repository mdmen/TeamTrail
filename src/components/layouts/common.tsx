import { cn } from '@/lib/helpers';

export function PanelLayout({
  className,
  children,
}: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={cn('rounded-lg bg-[--surface-card] p-4 shadow-md', className)}
    >
      {children}
    </div>
  );
}
