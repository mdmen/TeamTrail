'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useCurrentLocale } from '@/locales/client';
import { OverlayPanel } from 'primereact/overlaypanel';
import { PanelLayout } from '@/components/layouts';
import { WorkspaceImage } from './image';
import { WorkspaceInfo } from './info';
import { useMediaQuery, useMounted } from '@/lib/hooks';

interface WorkspaceProps {
  code: string;
}

export function Workspace({ code }: WorkspaceProps) {
  const panelRef = useRef<OverlayPanel | null>(null);
  const mounted = useMounted();
  const locale = useCurrentLocale();
  const wideScreen = useMediaQuery('lg');

  return (
    <>
      <Link
        href={`/${locale}/${code}`}
        className="block rounded-lg text-[--text-color] no-underline"
        onMouseEnter={(e) => {
          if (!mounted || wideScreen) return;
          panelRef.current?.show(e, undefined);
        }}
        onMouseLeave={() => {
          if (!mounted || wideScreen) return;
          panelRef.current?.hide();
        }}
        aria-label={mounted && !wideScreen ? 'Workspace Name' : undefined}
      >
        <PanelLayout className="transition-colors hover:bg-[--highlight-bg]">
          <div className="flex items-start gap-3 lg:w-72">
            <WorkspaceImage src="https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg" />
            <div className="hidden lg:block">
              {(!mounted || wideScreen) && (
                <WorkspaceInfo
                  name="Workspace Name"
                  role="Admin"
                  status="Public"
                  membersCount={3}
                />
              )}
            </div>
          </div>
        </PanelLayout>
      </Link>
      {mounted && !wideScreen && (
        <OverlayPanel ref={panelRef}>
          <WorkspaceInfo
            name="Workspace Name"
            role="Admin"
            status="Public"
            membersCount={3}
          />
        </OverlayPanel>
      )}
    </>
  );
}
