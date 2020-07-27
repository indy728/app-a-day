import React, { Componet } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import gql from 'graphql-tag';
import { graphql, useMutation, useQuery } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'
import AddCard from './AddCard';


const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Card = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 2px 2px 0 2px ${({ theme }) => theme.primary};
  position: relative;

  &:not(:first-child) {
    margin-top: 5rem;
  }

  .date {
    font-size: 2.4rem;
    font-family: serif;
    font-weight: bold;
  }

  .content {
    font-size: 2rem;
    width: 100%;
    margin-top: 2rem;
  }

  :hover {
    .icon {
      display: flex;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  padding: .5rem;

  * {
    color: ${({ theme }) => theme.primary};
  }

  &.close {
    top: 0;
  }

  &.edit {
    bottom: 0;
  }

  @media ${device.lg} {
    display: none;
  }
`;


const AddCardButton = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 2px ${({ theme }) => theme.primary};
  top: 1rem;
  right: 1rem;
  justify-content: center;
  font-size: 1.4rem;

  * {
    color: ${({ theme }) => theme.primary};
  }
`;

const DELETE_CARD = gql`
  mutation DeletCard($id: ID!) {
    deleteCard(id: $id) {
      _id
    }
  }
`;

const ADD_CARD = gql`
  mutation AddCard($dateString: String!, $dateNumber: String!, $content: String!) {
    addCard(dateString: $dateString, dateNumber: $dateNumber, content: $content) {
      _id
    }
  }
`;

const GET_CARDS = gql`
  {
    cards {
      _id
      dateString
      dateNumber
      content
    }
  }
`;

const CardList = ({ formVisible, formSubmit, formCancel, formChanged, formValue, formToggle }) => {
  const { loading: getCardsLoading, error: getCardsError, data: getCardsData} = useQuery(GET_CARDS)
  const [deleteCard, { data: deleteCardData}] = useMutation(DELETE_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });
  const [addCard, { data: addCardData }] = useMutation(ADD_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });

  const addCardHandler = () => {
    const content = formValue;
    const dateTime = new Date();
    const dateOptions = { 
      hour: '2-digit',
      minute: '2-digit',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const dateString = dateTime.toLocaleDateString("en-US", dateOptions);
    const dateNumber = `${Date.parse(dateTime)}`;

    addCard({
      variables: {
        dateString,
        dateNumber,
        content,
      }
    })
    formCancel();
  };

  let cardList = null;

  if ( getCardsData && getCardsData.cards ) {
    const { cards } = getCardsData;
    cardList = cards.sort((a, b) => Number(b.dateNumber) - Number(a.dateNumber)).map((card) => (
      <Card key={card._id}>
        <Icon className="icon edit">
          <FontAwesomeIcon icon={faEdit} />
        </Icon>
        <Icon className="icon close" onClick={() => deleteCard({ variables: { id: card._id } })} >
          <FontAwesomeIcon icon={faTimes} />
        </Icon>
        <div className="date">{card.dateString}</div>
        <div className="content">{card.content}</div>
      </Card>
    ))
  }

  return (
    <Wrapper>
      {cardList}
      <AddCard
          visible={formVisible}
          submit={addCardHandler}
          cancel={formCancel}
          changed={formChanged}
          value={formValue}
        />
      <AddCardButton onClick={formToggle}>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </AddCardButton>
    </Wrapper>
  );
}

export default CardList;
