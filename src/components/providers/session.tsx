import { SessionProvider as NextAuthProvider } from 'next-auth/react';

export function SessionProvider({ children }: ContainerWithChildren) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
