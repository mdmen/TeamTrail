'use client';

import { useState, useRef } from 'react';
import type { SignInResource } from '@clerk/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Toast } from '@/components/ui';
import { FormRow } from '@/components/layouts';
import {
  FormFieldText,
  FormFieldPassword,
} from '@/components/features/hook-form-fields';
import {
  type FormSignInFields,
  formSchema,
  initialValues,
  FormFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';

interface SignInCredentialsFormProps {
  onComplete: () => void;
  signIn: SignInResource;
}

export function SignInCredentialsForm({
  signIn,
  onComplete,
}: SignInCredentialsFormProps) {
  const t = useI18n();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormSignInFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

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

      onComplete();
    } catch (error: unknown) {
      handleAPIError(error, toast, t);
      setIsLoading(false);
    }
  };

  return (
    <form key="signIn" onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toast} />
      <FormRow>
        <FormFieldText
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
        <FormFieldPassword
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
    </form>
  );
}
