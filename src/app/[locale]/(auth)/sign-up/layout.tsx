import Link from 'next/link';
import { getI18n } from '@/locales/server';
import { FormLayout, FormFooter } from '../common';

export async function generateMetadata() {
  const t = await getI18n();

  return {
    title: t('page.signUp.title'),
  };
}

export default async function SignUpLayout({
  children,
}: React.PropsWithChildren) {
  const t = await getI18n();

  return (
    <>
      <FormLayout caption={t('page.signUp.caption')}>{children}</FormLayout>
      <FormFooter>
        {t('page.signUp.haveAccount', {
          link: <Link href="/sign-in">{t('common.signIn')}</Link>,
        })}
      </FormFooter>
    </>
  );
}
