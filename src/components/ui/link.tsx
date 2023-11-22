import Link, { type LinkProps } from 'next/link';
import { cn } from '@/lib/helpers';
import { Ripple } from 'primereact/ripple';

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  return (
    <Link {...props} className={cn('p-button p-component', className)}>
      <span className="p-button-label">{children}</span>
      <Ripple />
    </Link>
  );
}
