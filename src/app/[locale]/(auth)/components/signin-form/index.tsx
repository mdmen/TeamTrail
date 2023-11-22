'use client';

import { useRef, useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { FormSkeleton } from '@/components/layouts/form';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';
import { envPublicSchema } from '@/env/public';
import { OAuthForm } from '../oauth-form';
import { SignInCredentialsForm } from './credentials-form';
import { SignInForgotPasswordForm } from './forgot-password-form';
import { SignInResetPasswordForm } from './reset-password-form';

type FormState = 'credentials' | 'forgot-password' | 'reset-password';

export function SignInForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const { isLoaded, signIn, setActive } = useSignIn();
  const [formState, setFormState] = useState<FormState>('credentials');

  if (!isLoaded) {
    return <FormSkeleton rows={3} />;
  }

  const onComplete = async () => {
    try {
      const { createdSessionId } = signIn;
      await setActive({ session: createdSessionId });

      router.push(envPublicSchema.AFTER_SIGN_IN_URL);
    } catch (err) {
      handleAPIError(err, toast, t);
    }
  };

  const BackToLogin = () => (
    <Button
      label="Back to login"
      onClick={() => setFormState('credentials')}
      className="mt-4 p-0"
      text
    />
  );

  return (
    <>
      <Toast ref={toast} />
      {formState === 'credentials' && (
        <>
          <SignInCredentialsForm signIn={signIn} onComplete={onComplete} />
          <Button
            label="Forgot password?"
            onClick={() => setFormState('forgot-password')}
            className="mt-4 p-0"
            text
          />
          <Divider align="center">{t('form.auth.socials')}</Divider>
          <OAuthForm type="signIn" auth={signIn} />
        </>
      )}
      {formState === 'forgot-password' && (
        <>
          <SignInForgotPasswordForm
            signIn={signIn}
            onComplete={() => {
              setFormState('reset-password');
            }}
          />
          <BackToLogin />
        </>
      )}
      {formState === 'reset-password' && (
        <>
          <SignInResetPasswordForm signIn={signIn} onComplete={onComplete} />
          <BackToLogin />
        </>
      )}
    </>
  );
}
