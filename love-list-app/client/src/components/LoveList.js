import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
import AddCard from './AddCard';
import CardList from './CardList';
// import { useMutation, useQuery } from 'react-apollo';
import { useMutation, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ADD_CARD, DELETE_CARD } from './mutations';
import { GET_CARDS } from './queries';

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const AddCardButton = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 4px 2px ${({ theme }) => theme.primary};
  top: 1rem;
  right: 1rem;
  justify-content: center;
  font-size: 1.4rem;
  transition: .1s all ease-out;

  * {
    color: ${({ theme }) => theme.primary};
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LoveList = () => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');
  const { loading: getCardsLoading, error: getCardsError, data: getCardsData} = useQuery(GET_CARDS)
  const [deleteCard] = useMutation(DELETE_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });
  const [addCard] = useMutation(ADD_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });

  const setInitialState = () => {
    setShowForm(false);
    setValue('');
  }

  const addCardHandler = () => {
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
        content: value,
      }
    })
    setInitialState();
  }

  const inputChangedHandler = (event) => {
    setValue(event.target.value);
  }

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  }

  let cardList = null;

  if (getCardsLoading) cardList = <div>...loading</div>
  if (getCardsError) cardList = <div>Error</div>
  if (getCardsData && getCardsData.cards) cardList = (
    <CardList 
        data={getCardsData.cards}
        deleteCard={deleteCard}
        editCard={null}
      />
  )

  return (
    <Wrapper>
      {cardList}
      <AddCard
        visible={showForm}
        submit={addCardHandler}
        cancel={setInitialState}
        changed={inputChangedHandler}
        value={value}
      />
    <AddCardButton onClick={toggleFormHandler}>
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </AddCardButton>
    </Wrapper>
  );
}

export default LoveList;
