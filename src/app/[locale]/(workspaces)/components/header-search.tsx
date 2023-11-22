'use client';

import { useState } from 'react';
import { GlobalSearchInput } from '@/components/features/global-search-input';
import { cn } from '@/lib/helpers';

export function HeaderSearch() {
  const [focused, setFocused] = useState(false);

  return (
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
  );
}
