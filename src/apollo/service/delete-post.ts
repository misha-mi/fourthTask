import { gql } from '@apollo/client';

export const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    postDelete(input: { id: $id }) {
      id
      ok
    }
  }
`;
