import { type Toast } from 'primereact/toast';
import { isClerkAPIResponseError } from '@clerk/nextjs';
import { type useI18n } from '@/locales/client';

export const handleAuthError = (
  error: unknown,
  toastRef: React.RefObject<Toast>,
  t: ReturnType<typeof useI18n>,
) => {
  const summary = t('error.common.title');

  if (isClerkAPIResponseError(error)) {
    error.errors.forEach(({ message }) => {
      toastRef.current?.show({
        severity: 'error',
        summary,
        detail: message,
        life: 10000,
      });
    });
  } else {
    toastRef.current?.show({
      severity: 'error',
      summary,
      detail: t('error.common.description'),
      life: 10000,
    });
  }
};
