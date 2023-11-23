'use client';

import { useStore, useMounted, useMediaQuery } from '@/lib/hooks';
import { Button, type ButtonProps } from 'primereact/button';
import { Search, SearchX } from 'lucide-react';

interface HeaderSearchTogglerProps extends ButtonProps {}

export function HeaderSearchToggler(props: HeaderSearchTogglerProps) {
  const isMounted = useMounted();
  const notMobile = useMediaQuery('sm');
  const { headerSearchHidden, setHeaderSearchHidden } = useStore(
    (state) => state,
  );

  if (!isMounted || notMobile) return null;

  return (
    <Button
      type="button"
      aria-label="Toggle search"
      icon={
        headerSearchHidden ? (
          <Search size="1.7rem" />
        ) : (
          <SearchX size="1.7rem" />
        )
      }
      {...props}
      onClick={() => {
        setHeaderSearchHidden(!headerSearchHidden);
      }}
    />
  );
}
