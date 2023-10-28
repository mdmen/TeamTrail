'use client';

import { useState, useRef } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  FormRow,
  Divider,
  FormSkeleton,
  Toast,
  Message,
} from '@/components/ui';
import { SignUpFormTextField, SignUpFormPassword } from '../fields';
import {
  FormSignUpFields,
  formSignUpSchema,
  initialSignUpValues,
  FormVerifyFields,
  initialVerifyValues,
  SignUpFields,
  VerifyFields,
  formVerifySchema,
  CommonAuthFields,
} from '../schemas';
import { useI18n } from '@/locales/client';
import { handleAuthError } from '../utils';

export function SignUpForm() {
  const t = useI18n();
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const { control, handleSubmit } = useForm<FormSignUpFields>({
    resolver: zodResolver(formSignUpSchema),
    defaultValues: initialSignUpValues,
  });
  const { control: verifyFormControl, handleSubmit: handleVerifySubmit } =
    useForm<FormVerifyFields>({
      resolver: zodResolver(formVerifySchema),
      defaultValues: initialVerifyValues,
    });

  if (!isLoaded) {
    return <FormSkeleton rows={4} />;
  }

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

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      setIsVerification(true);
    } catch (error: unknown) {
      handleAuthError(error, toast, t);
    } finally {
      setIsLoading(false);
    }
  };

  const onVerify: SubmitHandler<FormVerifyFields> = async ({ code }) => {
    try {
      setIsLoading(true);

      const result = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/');
        return;
      }

      throw Error('Clerk is not configured for email address verification');
    } catch (error: unknown) {
      handleAuthError(error, toast, t);
      setIsLoading(false);
    }
  };

  if (isVerification) {
    return (
      <form key="verify" onSubmit={handleVerifySubmit(onVerify)}>
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
            control={verifyFormControl}
            name={VerifyFields.CODE}
            disabled={isLoading}
            autoFocus
            required
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

  return (
    <form key="signUp" onSubmit={handleSubmit(onSignUp)}>
      <Toast ref={toast} />
      <FormRow>
        <SignUpFormTextField
          label={t('form.username.label')}
          autoComplete="username"
          control={control}
          name={CommonAuthFields.USERNAME}
          disabled={isLoading}
          autoFocus
          required
        />
      </FormRow>
      <FormRow>
        <SignUpFormTextField
          label={t('form.email.label')}
          autoComplete="email"
          control={control}
          name={CommonAuthFields.EMAIL}
          disabled={isLoading}
          type="email"
          required
        />
      </FormRow>
      <FormRow>
        <SignUpFormPassword
          name={CommonAuthFields.PASSWORD}
          control={control}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow multipleRowFields>
        <SignUpFormTextField
          label="First name"
          autoComplete="given-name"
          control={control}
          disabled={isLoading}
          name={SignUpFields.FIRSTNAME}
        />
        <SignUpFormTextField
          label="Last name"
          autoComplete="family-name"
          control={control}
          disabled={isLoading}
          name={SignUpFields.LASTNAME}
        />
      </FormRow>
      <FormRow noMargin>
        <Button
          label={t('button.signUp')}
          type="submit"
          className="w-full"
          loading={isLoading}
        />
      </FormRow>
      <Divider align="center">{t('form.auth.socials')}</Divider>
      <FormRow>
        <Button
          severity="secondary"
          label={t('button.signUp')}
          type="button"
          className="w-full"
        />
      </FormRow>
    </form>
  );
}
