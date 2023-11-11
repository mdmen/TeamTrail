import Link from 'next/link';
import { getI18n } from '@/locales/server';
import { SignInForm } from '../components/signin-form';
import { FormLayout } from '../components/form-layout';
import { FormFooter } from '../components/form-footer';

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
        <p>
          {t('page.signIn.haveNoAccount', {
            link: <Link href="/sign-up">{t('common.signUp')}</Link>,
          })}
        </p>
      </FormFooter>
    </>
  );
}
