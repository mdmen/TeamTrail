import { gql } from '../_generated';

export const CREATE_USER = gql(`
  mutation CreateUser($input: CreateUserInput!) {
    user: createUser(input: $input) {
      id
    }
  }
`);
