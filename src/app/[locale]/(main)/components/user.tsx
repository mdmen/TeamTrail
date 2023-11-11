'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useId } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import { Avatar, Badge, Button, Menu, type MenuProps } from '@/components/ui';
import { LogOut, UserCog, MailWarning, BellRing } from '@/components/icons';
import { envPublicSchema } from '@/env/public';
import { cn } from '@/lib/helpers';

const src =
  'https://primefaces.org/cdn/primereact/images/organization/walter.jpg';

export function User() {
  const menuRef = useRef<Menu>(null);
  const { signOut } = useClerk();
  const router = useRouter();
  const popupId = useId();

  const items: MenuProps['model'] = [
    {
      template: (_, { className }) => {
        return (
          <Link
            href="/profile"
            className={cn(className, 'flex w-full items-center')}
          >
            <Avatar className="mr-2" size="xlarge" shape="circle">
              <Image src={src} width={56} height={56} alt="" />
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-bold">Dmitry Menov</span>
              <span className="text-sm">dmsdasd@sdsdasdasd.com</span>
            </div>
          </Link>
        );
      },
    },
    { separator: true },
    {
      template: (_, { className }) => {
        return (
          <Link href="/chat" role="menuitem" className={className}>
            <MailWarning
              size="1.5rem"
              className="p-menuitem-icon text-[--primary-color]"
            />
            <span className="p-menuitem-text font-semibold text-[--primary-color]">
              8 messages
            </span>
          </Link>
        );
      },
    },
    {
      template: (_, { className }) => {
        return (
          <Link href="/notifications" role="menuitem" className={className}>
            <BellRing
              size="1.5rem"
              className="p-menuitem-icon text-[--indigo-500]"
            />
            <span className="p-menuitem-text font-semibold text-[--indigo-500]">
              7 notifications
            </span>
          </Link>
        );
      },
    },
    {
      template: (_, { className }) => {
        return (
          <Link href="/profile/edit" role="menuitem" className={className}>
            <UserCog size="1.5rem" className="p-menuitem-icon" />
            <span className="p-menuitem-text">Edit profile</span>
          </Link>
        );
      },
    },
    {
      label: 'Sign out',
      icon: <LogOut size="1.5rem" className="p-menuitem-icon" />,
      command: () => {
        signOut(() => {
          router.push(envPublicSchema.SIGN_IN_URL);
        });
      },
    },
  ];

  return (
    <div className="p-overlay-badge relative h-12 w-12">
      <Button
        onClick={(e) => menuRef.current?.toggle(e)}
        className="relative m-0 flex overflow-hidden rounded-full border-0 p-0"
        aria-controls={popupId}
        aria-haspopup
      >
        <Avatar size="large" shape="circle">
          <Image src={src} width={42} height={42} alt="" />
        </Avatar>
      </Button>
      <div>
        <Badge value="8" severity="info" />
      </div>
      <Menu id={popupId} model={items} ref={menuRef} popup />
    </div>
  );
}
