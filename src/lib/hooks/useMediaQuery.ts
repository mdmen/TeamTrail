import { useEffect, useState } from 'react';
import { isServer } from '../helpers';

const queries = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

const getMatches = (query: string): boolean => {
  if (isServer()) return false;

  return window.matchMedia(query).matches;
};

export function useMediaQuery(key: keyof typeof queries): boolean {
  const query = queries[key];
  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }

    handleChange();

    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
