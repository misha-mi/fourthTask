import { gql } from '@apollo/client';

export const GET_MY_POSTS = gql`
  query GetMyPosts($limit: Int, $afterCursor: String) {
    posts: myPosts(input: { limit: $limit, afterCursor: $afterCursor }) {
      data {
        author {
          avatarUrl
          firstName
        }
        title
        createdAt
        description
        id
        isLiked
        likesCount
        mediaUrl
      }
      pageInfo {
        afterCursor
      }
    }
  }
`;
