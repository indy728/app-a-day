import { gql } from '@apollo/client';

export const GET_CARDS = gql`
{
  cards {
    _id
    dateString
    dateNumber
    content
  }
}
`;