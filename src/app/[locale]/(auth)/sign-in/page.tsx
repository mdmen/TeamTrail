import Link from 'next/link';
import { SignInForm } from '@/components/features/signin-form';
import { getI18n } from '@/locales/server';
import { FormLayout, FormFooter } from '../common';

export async function generateMetadata() {
  const t = await getI18n();

  return {
    title: t('page.signIn.title'),
  };
}

export default async function SignInPage() {
  const t = await getI18n();

  return (
    <>
      <FormLayout caption={t('page.signIn.caption')}>
        <SignInForm />
      </FormLayout>
      <FormFooter>
        {t('page.signIn.haveNoAccount', {
          link: <Link href="/sign-up">{t('common.signUp')}</Link>,
        })}
      </FormFooter>
    </>
  );
}
