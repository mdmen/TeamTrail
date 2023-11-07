'use client';

import { useCallback } from 'react';
import { HttpLink, ApolloLink } from '@apollo/client';
import { useAuth } from '@clerk/nextjs';
import { setContext } from '@apollo/client/link/context';
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { isServer } from '@/lib/helpers';
import { envPublicSchema } from '@/env/public';

export function GraphQLProvider({ children }: React.PropsWithChildren) {
  const { getToken } = useAuth();

  const makeClient = useCallback(() => {
    const authLink = setContext(async (_, { headers }) => {
      const token = await getToken();

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const httpLink = new HttpLink({
      uri: envPublicSchema.API_URL,
      credentials: 'include',
    });

    const ssrLink = isServer()
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : httpLink;

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: ApolloLink.from([authLink, ssrLink]),
    });
  }, [getToken]);

  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
