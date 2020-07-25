import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import gql from 'graphql-tag';
import { graphql, useMutation, useQuery } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'


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

const DELETE_CARD = gql`
  mutation DeletCard($id: ID!) {
    deleteCard(id: $id) {
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

const CardList = (props) => {
  const { loading: getCardsLoading, error: getCardsError, data: getCardsData} = useQuery(GET_CARDS)
  const [deleteCard, { data: deleteCardData}] = useMutation(DELETE_CARD);
  const clickDelete = (id) => deleteCard({ variables: { id }})

  let cardList = null;

  if ( getCardsData && getCardsData.cards ) {
    const { cards } = getCardsData;
    cardList = getCardsData.cards.sort((a, b) => Number(b.dateNumber) - Number(a.dateNumber)).map((card) => (
      <Card key={card._id}>
        <Icon className="icon edit">
          <FontAwesomeIcon icon={faEdit} />
        </Icon>
        <Icon className="icon close" onClick={() => clickDelete(card._id)}>
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
    </Wrapper>
  );
}

export default CardList;
