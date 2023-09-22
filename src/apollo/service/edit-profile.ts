import { gql } from '@apollo/client';

export const EDIT_PROFILE = gql`
  mutation EditProfile(
    $avatarUrl: String
    $birthDate: String
    $country: String
    $email: String!
    $firstName: String
    $gender: GenderType
    $lastName: String
    $middleName: String
    $phone: String
  ) {
    userEditProfile(
      input: {
        avatarUrl: $avatarUrl
        birthDate: $birthDate
        country: $country
        email: $email
        firstName: $firstName
        gender: $gender
        lastName: $lastName
        middleName: $middleName
        phone: $phone
      }
    ) {
      problem {
        ... on EditProfileProblemUnion {
          ... on EmailAlreadyUsedProblem {
            message
          }
          ... on PhoneAlreadyUsedProblem {
            message
          }
        }
      }
      user {
        avatarUrl
        birthDate
        country
        email
        firstName
        gender
        id
        lastName
        middleName
        phone
      }
    }
  }
`;
