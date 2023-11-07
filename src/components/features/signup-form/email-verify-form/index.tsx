'use client';

import { useState, useRef } from 'react';
import type { SignUpResource } from '@clerk/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormRow, Toast, Message } from '@/components/ui';
import { SignUpFormTextField } from '@/components/features/hook-form-fields';
import {
  initialValues,
  FormFields,
  formSchema,
  type FormVerifyFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';

interface SignUpEmailVerifyFormProps {
  signUp: SignUpResource;
  onComplete: () => void;
}

export function SignUpEmailVerifyForm({
  signUp,
  onComplete,
}: SignUpEmailVerifyFormProps) {
  const t = useI18n();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormVerifyFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormVerifyFields> = async ({ code }) => {
    try {
      setIsLoading(true);

      const { status } = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (status !== 'complete') {
        throw Error(
          'Auth process is not configured for email address verification',
        );
      }

      onComplete();
    } catch (err: unknown) {
      handleAPIError(err, toast, t);
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
      <FormRow margin="none">
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
