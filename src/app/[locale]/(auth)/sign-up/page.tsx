import Link from 'next/link';
import { SignUpForm } from '@/components/features/signup-form';
import { getI18n } from '@/locales/server';
import { FormLayout, FormFooter } from '../common';

export async function generateMetadata() {
  const t = await getI18n();

  return {
    title: t('page.signUp.title'),
  };
}

export default async function SignUpPage() {
  const t = await getI18n();

  return (
    <>
      <FormLayout caption={t('page.signUp.caption')}>
        <SignUpForm />
      </FormLayout>
      <FormFooter>
        {t('page.signUp.haveAccount', {
          link: <Link href="/sign-in">{t('common.signIn')}</Link>,
        })}
      </FormFooter>
    </>
  );
}
