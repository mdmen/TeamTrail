'use client';

import { useI18n } from '../../locales/client';
import { Button } from '@/components/ui';

export default function Home() {
  const t = useI18n();

  return (
    <main>
      <h1>{t('hello.world')}</h1>
      <Button label="Login" />
    </main>
  );
}
