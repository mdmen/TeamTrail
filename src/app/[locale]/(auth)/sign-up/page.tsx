import Link from 'next/link';
import { getI18n } from '@/locales/server';
import { SignUpForm } from '../components/signup-form';
import { FormLayout } from '../components/form-layout';
import { FormFooter } from '../components/form-footer';

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
        <p>
          {t('page.signUp.haveAccount', {
            link: <Link href="/sign-in">{t('common.signIn')}</Link>,
          })}
        </p>
      </FormFooter>
    </>
  );
}
