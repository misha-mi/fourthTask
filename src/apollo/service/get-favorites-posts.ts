import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query GetFavoritesPosts ($limit: Int,  $afterCursor: String) {
  favouritePosts(input: {limit: $limit, afterCursor: $afterCursor}) {
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
}

`;
