import Link from 'next/link';
import {
  Sun,
  Bell,
  Home,
  MessagesSquare,
  LayoutDashboard,
} from '@/components/icons';
import { Divider, Tag } from '@/components/ui';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const mainItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Workspaces',
    href: '/workspaces',
    icon: <LayoutDashboard width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Chat',
    href: '/chat',
    icon: <MessagesSquare width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Boards',
    href: '/boards',
    icon: <Sun width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Issues',
    href: '/issues',
    icon: <Sun width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Members',
    href: '/members',
    icon: <Sun width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Calendar',
    href: '/calendar',
    icon: <Sun width="1.7rem" height="1.7rem" />,
  },
  {
    name: 'Pages',
    href: '/pages',
    icon: <Sun width="1.7rem" height="1.7rem" />,
  },
];

const secondaryItems: NavigationItem[] = [
  {
    name: 'Notifications',
    href: '/notifications',
    icon: <Bell width="1.7rem" height="1.7rem" />,
  },
];

function NavigationItem({ href, name, icon }: NavigationItem) {
  return (
    <li>
      <Link
        className="flex w-full items-center gap-3 rounded-lg p-3 text-start text-lg text-[--text-color] no-underline transition-colors hover:bg-[--highlight-bg]"
        href={href}
      >
        {icon}
        <span className="grow">{name}</span>
        <Tag value="71" rounded />
      </Link>
    </li>
  );
}

export function Navigation() {
  return (
    <>
      <ul className="flex flex-col">
        {mainItems.map((props) => (
          <NavigationItem key={props.name} {...props} />
        ))}
      </ul>
      <Divider />
      <ul className="flex flex-col">
        {secondaryItems.map((props) => (
          <NavigationItem key={props.name} {...props} />
        ))}
      </ul>
    </>
  );
}
