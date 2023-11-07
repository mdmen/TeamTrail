import type { Toast, ToastMessageOptions } from 'primereact/toast';
import { isClerkAPIResponseError } from '@clerk/nextjs';
import { GraphQLError } from 'graphql';
import type { useI18n } from '@/locales/client';

export function handleAPIError(
  error: unknown,
  toastRef: React.RefObject<Toast>,
  t: ReturnType<typeof useI18n>,
) {
  const options: ToastMessageOptions = {
    severity: 'error',
    summary: t('error.common.title'),
    detail: t('error.common.description'),
    life: 10000,
  };

  if (isClerkAPIResponseError(error)) {
    error.errors.forEach(({ message }) => {
      toastRef.current?.show({
        ...options,
        detail: message,
      });
    });
    return;
  }

  if (Array.isArray(error) && error[0] instanceof GraphQLError) {
    error.forEach(({ message }) => {
      toastRef.current?.show({
        ...options,
        detail: t(message as 'stub'),
      });
    });
    return;
  }

  toastRef.current?.show(options);
}
