import { type Metadata } from 'next';
import { getI18n } from '@/locales/server';
import { envPublicSchema } from '@/env/public';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: {
      template: '%s | TeamTrail',
      default: t('page.home.title'),
    },
    description: t('page.home.description'),
    colorScheme: 'light dark',
    // TODO generate dynamic urls
    alternates: {
      canonical: `${envPublicSchema.WEBSITE_URL}/en`,
      languages: {
        en: `${envPublicSchema.WEBSITE_URL}/en`,
        ru: `${envPublicSchema.WEBSITE_URL}/ru`,
      },
    },
  };
}
