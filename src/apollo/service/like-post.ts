import { gql } from '@apollo/client';

export const LIKE_POST = gql`
  mutation LikePost($id: String!) {
    postLike(input: { id: $id }) {
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
  }
`;
