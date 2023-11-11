'use client';

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Home() {
  const { getToken } = useAuth();

  useEffect(() => {
    const test = async () => {
      const token = await getToken();
      console.log(token);
    };

    test();
  }, [getToken]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
