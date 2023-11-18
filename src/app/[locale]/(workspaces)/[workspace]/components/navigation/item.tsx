import Link from 'next/link';
import { Tag, Badge, Tooltip } from '@/components/ui';
import type { Route } from './routes';
import { cn } from '@/lib/helpers';

interface NavigationItemProps extends Route {
  collapsed?: boolean;
}

export function NavigationItem({
  href,
  name,
  code,
  count,
  selected,
  icon,
  collapsed,
}: NavigationItemProps) {
  const tooltipClassName = `js-nav-item-${code}`;

  return (
    <li className="p-overlay-badge relative">
      <div className="rounded-lg">
        <Link
          href={href}
          data-pr-tooltip={name}
          className={cn(
            'flex w-full items-center gap-3 rounded-lg text-lg text-[--text-color]',
            'p-3 no-underline transition-colors hover:bg-[--highlight-bg]',
            tooltipClassName,
            {
              'justify-center': collapsed,
              'bg-[--surface-hover]': selected,
            },
          )}
        >
          {icon}
          <span
            className={cn('grow leading-none', {
              'sr-only': collapsed,
              'font-semibold': selected,
            })}
          >
            {name}
          </span>
          {!!count && !collapsed && <Tag value={count} rounded />}
        </Link>
      </div>
      {collapsed && (
        <>
          {!!count && <Badge value={count} />}
          <Tooltip target={`.${tooltipClassName}`} />
        </>
      )}
    </li>
  );
}
