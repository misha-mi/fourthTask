import { gql } from '@apollo/client';

export const POST_CREATE = gql`
  mutation PostCreate(
    $description: String!
    $mediaUrl: String!
    $title: String!
  ) {
    postCreate(
      input: { description: $description, mediaUrl: $mediaUrl, title: $title }
    ) {
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
