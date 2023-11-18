import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';
import { User } from './user';
import { PanelLayout } from '@/components/layouts';

export function Header() {
  return (
    <header className="mb-4">
      <PanelLayout className="flex items-center justify-between gap-3 rounded-none">
        <Link
          href="/"
          className="flex items-end gap-2 text-[--surface-800] no-underline"
        >
          <Image
            className="hidden sm:block"
            src={logo}
            width={30}
            height={33}
            alt=""
          />
          <span className="relative top-[3px] font-coiny text-3xl">
            TeamTrail
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeSwitcher text />
          <LocaleSwitcher text />
          <User />
        </div>
      </PanelLayout>
    </header>
  );
}
