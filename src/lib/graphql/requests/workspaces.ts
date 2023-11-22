import { gql } from '../_generated';

export const WORKSPACES = gql(`
  query Workspaces($input: WorkspacesInput!) {
    workspaces(input: $input) {
      code
      name
      image
      description
      nav {
        current
        limit
        total
      }
    }
  }
`);
