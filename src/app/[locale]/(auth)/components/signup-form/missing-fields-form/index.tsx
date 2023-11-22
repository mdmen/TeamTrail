'use client';

import { useState, useRef } from 'react';
import type { SignUpResource } from '@clerk/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Message } from 'primereact/message';
import { FormRow } from '@/components/layouts';
import { FormFieldText } from '@/components/features/hook-form-fields';
import {
  initialValues,
  FormFields,
  formSchema,
  type FormMissingFields,
} from './schema';
import { useI18n } from '@/locales/client';
import { handleAPIError } from '@/lib/helpers';

interface SignUpMissingFieldsFormProps {
  signUp: SignUpResource;
  onComplete: () => void;
}

export function SignUpMissingFieldsForm({
  signUp,
  onComplete,
}: SignUpMissingFieldsFormProps) {
  const t = useI18n();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<FormMissingFields>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<FormMissingFields> = async ({ username }) => {
    try {
      setIsLoading(true);

      const { status } = await signUp.update({
        username,
      });

      if (status !== 'complete') {
        throw Error('OAuth process is not configured for missing fields');
      }

      onComplete();
    } catch (err: unknown) {
      handleAPIError(err, toast, t);
      setIsLoading(false);
    }
  };

  return (
    <form key="signUpMissingFields" onSubmit={handleSubmit(onSubmit)}>
      <Toast ref={toast} />
      <FormRow>
        <Message
          className="w-full"
          severity="info"
          text={t('form.missingFields.note')}
        />
      </FormRow>
      <FormRow>
        <FormFieldText
          label={t('form.username.label')}
          autoComplete="off"
          control={control}
          name={FormFields.USERNAME}
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
