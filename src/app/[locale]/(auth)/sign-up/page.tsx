import { SignUpForm } from '@/components/features/auth/signup-form';
import { getI18n } from '@/locales/server';

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
      <h1 className="text-center text-2xl">{t('page.signUp.caption')}</h1>
      <SignUpForm />
    </>
  );
}
