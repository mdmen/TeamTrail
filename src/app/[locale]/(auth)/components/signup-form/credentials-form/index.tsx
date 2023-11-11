'use client';

import { useState, useRef } from 'react';
import type { SignUpResource } from '@clerk/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Toast } from '@/components/ui';
import { FormRow } from '@/components/layouts';
import {
  FormFieldText,
  FormFieldPassword,
} from '@/components/features/hook-form-fields';
import {
  FormSignUpFields,
  formSchema,
  initialValues,
  FormFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';

interface SignUpCredentialsFormProps {
  onComplete: () => void;
  signUp: SignUpResource;
  verifyEmail?: boolean;
}

export function SignUpCredentialsForm({
  signUp,
  verifyEmail,
  onComplete,
}: SignUpCredentialsFormProps) {
  const t = useI18n();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormSignUpFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSignUp: SubmitHandler<FormSignUpFields> = async ({
    email,
    password,
    username,
    firstname,
    lastname,
  }) => {
    try {
      setIsLoading(true);

      await signUp.create({
        emailAddress: email,
        password,
        username,
        firstName: firstname,
        lastName: lastname,
      });

      if (verifyEmail) {
        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        });
      }

      onComplete();
    } catch (error: unknown) {
      handleAPIError(error, toast, t);
      setIsLoading(false);
    }
  };

  return (
    <form key="signUp" onSubmit={handleSubmit(onSignUp)}>
      <Toast ref={toast} />
      <FormRow>
        <FormFieldText
          label={t('form.username.label')}
          autoComplete="username"
          control={control}
          name={FormFields.USERNAME}
          disabled={isLoading}
          autoFocus
          minLength={3}
          required
        />
      </FormRow>
      <FormRow>
        <FormFieldText
          label={t('form.email.label')}
          autoComplete="email"
          control={control}
          name={FormFields.EMAIL}
          disabled={isLoading}
          type="email"
          required
        />
      </FormRow>
      <FormRow>
        <FormFieldPassword
          name={FormFields.PASSWORD}
          control={control}
          disabled={isLoading}
          feedback
          required
        />
      </FormRow>
      <FormRow multipleRowFields>
        <FormFieldText
          label="First name"
          autoComplete="given-name"
          control={control}
          disabled={isLoading}
          name={FormFields.FIRSTNAME}
        />
        <FormFieldText
          label="Last name"
          autoComplete="family-name"
          control={control}
          disabled={isLoading}
          name={FormFields.LASTNAME}
        />
      </FormRow>
      <FormRow margin="none">
        <Button
          label={t('button.signUp')}
          type="submit"
          className="w-full"
          loading={isLoading}
        />
      </FormRow>
    </form>
  );
}
