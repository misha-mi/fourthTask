import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($limit: Int, $type: PostFilterType!, $afterCursor: String) {
    posts(input: { limit: $limit, type: $type, afterCursor: $afterCursor }) {
      data {
        id
      }
      pageInfo {
        afterCursor
      }
    }
  }
`;
