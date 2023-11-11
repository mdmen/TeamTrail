'use client';

import { FormLayout } from './components/form-layout';
import { ErrorRecover } from '@/components/features/error-recover';

export default function AuthPageError({
  error,
  reset,
}: {
  error: NextPageError;
  reset: () => void;
}) {
  return (
    <FormLayout>
      <ErrorRecover error={error} reset={reset} />
    </FormLayout>
  );
}
