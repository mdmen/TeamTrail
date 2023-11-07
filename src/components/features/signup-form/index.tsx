'use client';

import { useRef, useEffect, useReducer } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { SignUpCredentialsForm } from './credentials-form';
import { FormSkeleton, Toast } from '@/components/ui';
import { useI18n } from '@/locales/client';
import { SignUpEmailVerifyForm } from './email-verify-form';
import { SignUpMissingFieldsForm } from './missing-fields-form';
import { handleAPIError } from '@/lib/helpers';
import { shouldVerifyEmailByCode, shouldFillMissingFields } from './utils';
import { useCreateDatabaseUser } from './hooks';
import { getFormStateAction, initialState, reducer } from './state';
import { envPublicSchema } from '@/env/public';

export function SignUpForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [{ formState }, dispatch] = useReducer(reducer, initialState);
  const createDatabaseUser = useCreateDatabaseUser(signUp);

  const allowedToVerifyEmail = shouldVerifyEmailByCode(signUp);
  const missingFieldsExists = shouldFillMissingFields(signUp);

  useEffect(() => {
    if (!isLoaded) return;

    if (missingFieldsExists) {
      dispatch(getFormStateAction('missing-fields'));
    } else if (allowedToVerifyEmail) {
      dispatch(getFormStateAction('email-verify'));
    }
  }, [allowedToVerifyEmail, isLoaded, missingFieldsExists]);

  if (!isLoaded) {
    return <FormSkeleton rows={4} />;
  }

  const onComplete = async () => {
    try {
      await createDatabaseUser();

      const { createdSessionId } = signUp;
      await setActive({ session: createdSessionId });

      router.push(envPublicSchema.AFTER_SIGN_UP_URL);
    } catch (err) {
      handleAPIError(err, toast, t);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      {formState === 'initial' && (
        <SignUpCredentialsForm
          signUp={signUp}
          onComplete={onComplete}
          verifyEmail={allowedToVerifyEmail}
        />
      )}
      {formState === 'email-verify' && (
        <SignUpEmailVerifyForm signUp={signUp} onComplete={onComplete} />
      )}
      {formState === 'missing-fields' && (
        <SignUpMissingFieldsForm signUp={signUp} onComplete={onComplete} />
      )}
    </>
  );
}
