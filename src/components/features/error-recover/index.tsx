'use client';

import { useEffect } from 'react';
import { useI18n } from '@/locales/client';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';

export function ErrorRecover({
  error,
  reset,
}: {
  error: NextPageError;
  reset: () => void;
}) {
  const t = useI18n();

  useEffect(() => {
    // logger
  }, [error]);

  return (
    <>
      <Message
        severity="error"
        text={t('error.common.title')}
        className="mb-4 w-full"
        pt={{
          icon: {
            className: 'w-5 h-5',
          },
          text: {
            className: 'font-bold',
          },
        }}
      />
      <Button
        onClick={() => reset()}
        label={t('button.tryAgain')}
        type="button"
      />
    </>
  );
}
