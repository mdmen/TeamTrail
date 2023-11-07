'use client';

import { useRef, useEffect, useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { SignUpCredentialsForm } from './credentials-form';
import { FormSkeleton, Toast, Divider } from '@/components/ui';
import { useI18n } from '@/locales/client';
import { SignUpEmailVerifyForm } from './email-verify-form';
import { SignUpMissingFieldsForm } from './missing-fields-form';
import { handleAPIError } from '@/lib/helpers';
import { shouldVerifyEmailByCode, isMissingFieldsExist } from './utils';
import { useCreateDatabaseUser } from './hooks';
import { envPublicSchema } from '@/env/public';
import { OAuthForm } from '../oauth-form';

type FormState = 'credentials' | 'email-verify' | 'missing-fields';

export function SignUpForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [formState, setFormState] = useState<FormState>('credentials');
  const createDatabaseUser = useCreateDatabaseUser(signUp);

  const allowedToVerifyEmail = shouldVerifyEmailByCode(signUp);
  const hasMissingFields = isMissingFieldsExist(signUp);

  useEffect(() => {
    if (!isLoaded) return;

    if (hasMissingFields) {
      setFormState('missing-fields');
    } else if (allowedToVerifyEmail) {
      setFormState('email-verify');
    }
  }, [allowedToVerifyEmail, isLoaded, hasMissingFields]);

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
      {formState === 'credentials' && (
        <>
          <SignUpCredentialsForm
            signUp={signUp}
            onComplete={onComplete}
            verifyEmail={allowedToVerifyEmail}
          />
          <Divider align="center">{t('form.auth.socials')}</Divider>
          <OAuthForm type="signUp" auth={signUp} />
        </>
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
