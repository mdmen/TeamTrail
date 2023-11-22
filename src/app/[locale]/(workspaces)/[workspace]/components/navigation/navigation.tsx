'use client';

import { Fragment, useMemo } from 'react';
import { Divider } from 'primereact/divider';
import { PanelLayout } from '@/components/layouts';
import { useI18n, useCurrentLocale } from '@/locales/client';
import { getRoutes } from './routes';
import { NavigationItem } from './item';
import { useMediaQuery, useMounted } from '@/lib/hooks';
import { cn } from '@/lib/helpers';

interface NavigationProps {
  workspaceCode: string;
}

export function Navigation({ workspaceCode }: NavigationProps) {
  const t = useI18n();
  const locale = useCurrentLocale();
  const mounted = useMounted();
  const wideScreen = useMediaQuery('(min-width: 1024px)');

  const routes = useMemo(
    () => getRoutes(locale, workspaceCode),
    [locale, workspaceCode],
  );

  return (
    <PanelLayout>
      <nav className="lg:w-72">
        {routes.map((group, groupIndex) => (
          <Fragment key={groupIndex}>
            <ul className={cn('flex flex-col')}>
              {group.map(({ code, name, ...props }) => {
                const itemName = t(name as 'stub');

                return (
                  <NavigationItem
                    key={code}
                    code={code}
                    name={itemName}
                    collapsed={mounted && !wideScreen}
                    {...props}
                  />
                );
              })}
            </ul>
            {groupIndex !== routes.length - 1 && <Divider className="px-0" />}
          </Fragment>
        ))}
      </nav>
    </PanelLayout>
  );
}
