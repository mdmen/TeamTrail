import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import type { SignUpResource } from '@clerk/types';
import { CREATE_USER } from '@/lib/graphql/requests/users';

export function useCreateDatabaseUser(signUp?: SignUpResource) {
  const [createUser] = useMutation(CREATE_USER);

  return useCallback(async () => {
    if (!signUp) return null;

    const { createdUserId, emailAddress, username, firstName, lastName } =
      signUp;

    if ([createdUserId, emailAddress, username].some((value) => !value)) {
      throw Error('There are missing required fields for sign up completion');
    }

    const { errors } = await createUser({
      variables: {
        input: {
          id: createdUserId as string,
          email: emailAddress as string,
          username: username as string,
          name: `${firstName} ${lastName}`.trim() || undefined,
        },
      },
    });

    if (errors && errors.length > 0) {
      throw errors;
    }
  }, [createUser, signUp]);
}
