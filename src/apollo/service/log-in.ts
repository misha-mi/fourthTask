import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation UserSignIn($email: String!, $password: String!) {
    userSignIn(input: { email: $email, password: $password }) {
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
