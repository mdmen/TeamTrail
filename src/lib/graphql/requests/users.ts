import { gql } from '../_generated';

export const GET_USERS = gql(`
  query GetUsers {
    users {
      id
      name
      nickname
      email
    }
  }
`);
