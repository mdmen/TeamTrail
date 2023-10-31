'use client';

import { useState, useRef, useEffect } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormRow, Toast, Message, FormSkeleton } from '@/components/ui';
import { SignUpFormTextField } from '@/components/features/hook-form-fields';
import {
  initialValues,
  FormFields,
  formSchema,
  type FormVerifyFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAuthError } from '@/lib/helpers';

export function SignUpVerifyForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormVerifyFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  const allowedToVerify = signUp?.status === 'missing_requirements';

  useEffect(() => {
    if (!isLoaded) return;
    if (!allowedToVerify) {
      router.push('/sign-up');
    }
  }, [allowedToVerify, isLoaded, router]);

  if (!isLoaded || !allowedToVerify) {
    return <FormSkeleton rows={4} />;
  }

  const onSubmit: SubmitHandler<FormVerifyFields> = async ({ code }) => {
    try {
      setIsLoading(true);

      const result = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push(process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL as string);
        return;
      }

      throw Error(
        'Auth process is not configured for email address verification',
      );
    } catch (error: unknown) {
      handleAuthError(error, toast, t);
      setIsLoading(false);
    }
  };

  return (
    <form key="signUpVerify" onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toast} />
      <FormRow>
        <Message
          className="w-full"
          severity="info"
          text={t('form.code.help')}
        />
      </FormRow>
      <FormRow>
        <SignUpFormTextField
          label={t('form.code.label')}
          autoComplete="off"
          control={control}
          name={FormFields.CODE}
          disabled={isLoading}
          autoFocus
          required
          minLength={3}
        />
      </FormRow>
      <FormRow noMargin>
        <Button
          label={t('button.send')}
          type="submit"
          className="w-full"
          loading={isLoading}
        />
      </FormRow>
    </form>
  );
}
