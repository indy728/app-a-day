import gql from 'graphql-tag';

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