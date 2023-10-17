import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { envServerSchema } from '@/env/server';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: envServerSchema.AUTH_GITHUB_ID,
      clientSecret: envServerSchema.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: envServerSchema.AUTH_GOOGLE_ID,
      clientSecret: envServerSchema.AUTH_GOOGLE_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
