import {
  Bell,
  Users,
  MessagesSquare,
  LayoutDashboard,
  KanbanSquare,
  CalendarDays,
  FileSpreadsheet,
  ListTodo,
} from 'lucide-react';
import type { Locale } from '@/types';

export interface Route {
  name: string;
  href: string;
  code: string;
  icon: React.ReactNode;
  count?: number;
  selected?: boolean;
}

const routes: Route[][] = [
  [
    {
      name: 'navigation.page.workspaces',
      code: 'workspaces',
      href: '/:locale',
      icon: <LayoutDashboard size="1.7rem" aria-hidden />,
    },
    {
      name: 'navigation.page.boards',
      code: 'boards',
      href: '/:locale/:workspaceCode/boards',
      icon: <KanbanSquare size="1.7rem" aria-hidden />,
    },
    {
      name: 'navigation.page.issues',
      code: 'issues',
      href: '/:locale/:workspaceCode/issues',
      icon: <ListTodo size="1.7rem" aria-hidden />,
      count: 25,
      selected: true,
    },
    {
      name: 'navigation.page.chat',
      code: 'chat',
      href: '/:locale/:workspaceCode/chat',
      icon: <MessagesSquare size="1.7rem" aria-hidden />,
      count: 89,
    },
    {
      name: 'navigation.page.members',
      code: 'members',
      href: '/:locale/:workspaceCode/members',
      icon: <Users size="1.7rem" aria-hidden />,
    },
    {
      name: 'navigation.page.calendar',
      code: 'calendar',
      href: '/:locale/:workspaceCode/calendar',
      icon: <CalendarDays size="1.7rem" aria-hidden />,
    },
    {
      name: 'navigation.page.pages',
      code: 'pages',
      href: '/:locale/:workspaceCode/pages',
      icon: <FileSpreadsheet size="1.7rem" aria-hidden />,
    },
  ],
  [
    {
      name: 'navigation.page.notifications',
      code: 'notifications',
      href: '/:locale/:workspaceCode/notifications',
      icon: <Bell size="1.7rem" aria-hidden />,
      count: 3,
    },
  ],
];

export function getRoutes(locale: Locale, workspaceCode: string) {
  return routes.map((group) =>
    group.map((route) => ({
      ...route,
      href: route.href
        .replace(':locale', locale)
        .replace(':workspaceCode', workspaceCode),
    })),
  );
}
