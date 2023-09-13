import { gql } from '@apollo/client';

export const JOIN_US = gql`
  mutation UserSignUp(
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    userSignUp(
      input: {
        email: $email
        password: $password
        passwordConfirm: $passwordConfirm
      }
    ) {
      problem {
        message
      }
      token
      user {
        avatarUrl
        birthDate
        country
        createdAt
        deletedAt
        email
        firstName
        gender
        id
        lastName
        middleName
        phone
        updatedAt
      }
    }
  }
`;
