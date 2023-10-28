import { getI18n } from '@/locales/server';

export async function generateMetadata() {
  const t = await getI18n();

  return {
    title: t('page.home.title'),
    description: t('page.home.description'),
    colorScheme: 'light dark',
  };
}
