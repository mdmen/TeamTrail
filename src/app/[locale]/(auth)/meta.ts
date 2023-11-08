import { type Metadata } from 'next';
import { getI18n } from '@/locales/server';
import { envPublicSchema } from '@/env/public';
import type { Locale } from '@/types';

interface GenerateMetadataParams {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams): Promise<Metadata> {
  const t = await getI18n();

  const title = t('page.home.title');
  const description = t('page.home.description');
  const images = {
    url: '/images/teamtrail.png',
    type: 'image/png',
    width: 1128,
    height: 362,
    alt: 'TeamTrail',
  };

  return {
    metadataBase: new URL(envPublicSchema.WEBSITE_URL),
    twitter: {
      card: 'summary',
      title,
      description,
      images,
    },
    openGraph: {
      type: 'website',
      locale,
      title,
      description,
      url: envPublicSchema.WEBSITE_URL,
      images,
    },
  };
}
