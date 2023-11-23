'use client';

import { useState } from 'react';
import { GlobalSearchInput } from '@/components/features/global-search-input';
import { useStore, useMediaQuery, useMounted } from '@/lib/hooks';
import { cn } from '@/lib/helpers';

interface HeaderSearchProps {
  className?: string;
}

export function HeaderSearch({ className }: HeaderSearchProps) {
  const [focused, setFocused] = useState(false);
  const { headerSearchHidden } = useStore((state) => state);
  const mounted = useMounted();
  const notMobile = useMediaQuery('sm');

  if (!mounted || (headerSearchHidden && !notMobile)) return null;

  return (
    <div className={cn('flex w-full min-w-0 grow justify-end', className)}>
      <div
        className={cn('relative w-full transition-[width] sm:w-80', {
          'sm:w-[35rem]': focused,
        })}
      >
        <GlobalSearchInput
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rounded
        />
      </div>
    </div>
  );
}
