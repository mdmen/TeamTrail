import { ClerkProvider } from '@clerk/nextjs';

export function AuthProvider({ children }: React.PropsWithChildren) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
