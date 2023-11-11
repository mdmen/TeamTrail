import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ThemeSwitcher } from '@/components/features/theme-switcher';
import { LocaleSwitcher } from '@/components/features/locale-switcher';
import { User } from './user';
import { PanelLayout } from '@/components/layouts';
import { Button } from '@/components/ui';
import { ChevronLeft } from '@/components/icons';

export function Header({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLProps<HTMLElement>>) {
  return (
    <header {...props}>
      <PanelLayout className="flex items-center justify-between gap-3 rounded-none">
        <div className="flex items-center gap-3 sm:gap-5">
          <Button
            severity="secondary"
            raised
            rounded
            text
            icon={<ChevronLeft size="1.7rem" />}
          />
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
        </div>
        <div className="flex items-center gap-3">
          {children}
          <ThemeSwitcher text />
          <LocaleSwitcher text />
          <User />
        </div>
      </PanelLayout>
    </header>
  );
}
