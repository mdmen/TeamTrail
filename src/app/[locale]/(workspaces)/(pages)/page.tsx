import { type Metadata } from 'next';
import { ButtonLink, Alert } from '@/components/ui';
import { getCurrentLocale, getI18n } from '@/locales/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: 'My workspaces',
  };
}

export default function WorkspacesPage() {
  const locale = getCurrentLocale();

  return (
    <div className="w-[50rem] max-w-full text-center">
      <Alert type="info" />
      <h1 className="my-4">You have no workspaces right now</h1>
      <p className="my-4 text-xl font-medium">
        But you can join an existing public workspace
      </p>
      <ButtonLink href={`/${locale}/find`}>Find workspace</ButtonLink>
      <p className="my-4 text-xl font-medium">or create you own</p>
      <ButtonLink href={`/${locale}/new`}>Create workspace</ButtonLink>
    </div>
  );
}
