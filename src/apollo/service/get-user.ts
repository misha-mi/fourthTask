import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    userMe {
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
`;
