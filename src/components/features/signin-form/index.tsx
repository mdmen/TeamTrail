'use client';

import { useState, useRef } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormRow, Divider, FormSkeleton, Toast } from '@/components/ui';
import {
  SignUpFormTextField,
  SignUpFormPassword,
} from '@/components/features/hook-form-fields';
import {
  type FormSignInFields,
  formSchema,
  initialValues,
  FormFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';
import { OAuthForm } from '../oauth-form';
import { envPublicSchema } from '@/env/public';

export function SignInForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const { control, handleSubmit } = useForm<FormSignInFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  if (!isLoaded) {
    return <FormSkeleton rows={3} />;
  }

  const onSubmit: SubmitHandler<FormSignInFields> = async ({
    identifier,
    password,
  }) => {
    try {
      setIsLoading(true);

      const result = await signIn.create({
        identifier,
        password,
      });

      if (result.status !== 'complete') {
        throw Error(
          'Auth process is not configured for password authentication',
        );
      }

      await setActive({ session: result.createdSessionId });
      router.push(envPublicSchema.AFTER_SIGN_IN_URL);
    } catch (error: unknown) {
      handleAPIError(error, toast, t);
      setIsLoading(false);
    }
  };

  return (
    <form key="signIn" onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toast} />
      <FormRow>
        <SignUpFormTextField
          label={t('form.identifier.label')}
          autoComplete="username"
          control={control}
          name={FormFields.IDENTIFIER}
          disabled={isLoading}
          autoFocus
          minLength={3}
          required
        />
      </FormRow>
      <FormRow>
        <SignUpFormPassword
          name={FormFields.PASSWORD}
          control={control}
          disabled={isLoading}
          required
        />
      </FormRow>
      <FormRow margin="none">
        <Button
          label={t('button.signIn')}
          type="submit"
          className="w-full"
          loading={isLoading}
        />
      </FormRow>
      <Divider align="center">{t('form.auth.socials')}</Divider>
      <OAuthForm type="signIn" auth={signIn} />
    </form>
  );
}
