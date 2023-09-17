import { gql } from '@apollo/client';

export const UNLIKE_POST = gql`
  mutation UnlikePost($id: String!) {
    postUnlike(input: { id: $id }) {
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
