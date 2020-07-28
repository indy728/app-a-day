import { gql } from '@apollo/client';

export const DELETE_CARD = gql`
  mutation DeletCard($id: ID!) {
    deleteCard(id: $id) {
      _id
    }
  }
`;

export const ADD_CARD = gql`
  mutation AddCard($dateString: String!, $dateNumber: String!, $content: String!) {
    addCard(dateString: $dateString, dateNumber: $dateNumber, content: $content) {
      _id
    }
  }
`;