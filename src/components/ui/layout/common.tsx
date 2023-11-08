import { cn } from '@/lib/helpers';

export function PanelLayout({
  children,
  className,
  ...props
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('rounded-lg bg-[--surface-card] shadow-md', className)}
    >
      {children}
    </div>
  );
}
