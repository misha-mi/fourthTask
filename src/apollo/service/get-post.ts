import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetPost($id: String!) {
    post(input: { id: $id }) {
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
