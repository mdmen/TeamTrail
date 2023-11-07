import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { auth } from '@clerk/nextjs';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { envPublicSchema } from '@/env/public';

export const { getClient } = registerApolloClient(() => {
  const { getToken } = auth();

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

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, httpLink]),
  });
});
