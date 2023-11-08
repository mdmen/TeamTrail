'use client';

import { FormLayout } from './common';
import { ErrorHandler } from '@/components/features/error-handler';

export default function AuthPageError({
  error,
  reset,
}: {
  error: NextPageError;
  reset: () => void;
}) {
  return (
    <FormLayout>
      <ErrorHandler error={error} reset={reset} />
    </FormLayout>
  );
}
