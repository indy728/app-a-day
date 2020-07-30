import React, { useState } from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
import Modal from './TextAreaModal';
import CardList from './CardList';
// import { useMutation, useQuery } from 'react-apollo';
import { useMutation, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ADD_CARD, DELETE_CARD, EDIT_CARD } from './mutations';
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
  const [modalType, setModalType] = useState('');
  const [modalID, setModalID] = useState('');
  const { loading: getCardsLoading, error: getCardsError, data: getCardsData} = useQuery(GET_CARDS)
  
  // Sends another request from our backend which is not ideal
  const [deleteCard] = useMutation(DELETE_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });
  const [addCard] = useMutation(ADD_CARD, {
    update (cache, { data }) {
      const newCardFromResponse = data?.addCard;
      const cachedCards = cache.readQuery({
        query: GET_CARDS,
      });

      cache.writeQuery({
        query: GET_CARDS,
        data: {
          cards: cachedCards?.cards.concat(newCardFromResponse)
        },
      });
    }
  });
  // const [editCard] = useMutation(EDIT_CARD);
  const [editCard] = useMutation(EDIT_CARD, {
    refetchQueries: [{ query: GET_CARDS }],
    awaitRefetchQueries: true,
  });

  const setInitialState = () => {
    setValue('');
    setModalType('');
    setModalID('');
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
    });
    setInitialState();
  }

  const editCardHandler = () => {
    editCard({
      variables: {
        id: modalID,
        content: value,
      }
    });
    setInitialState();
  }

  const inputChangedHandler = (event) => {
    setValue(event.target.value);
  }

  const closeModal = () => {
    setInitialState()
  }

  const buildModal = (type, editValue, id) => {
    setModalType(type);
    if (editValue && id) {
      setValue(editValue);
      setModalID(id);
    }
  }

  let cardList = null;

  if (getCardsLoading) cardList = <div>...loading</div>
  if (getCardsError) cardList = <div>Error</div>
  if (getCardsData?.cards) cardList = (
    <CardList 
      data={getCardsData.cards}
      deleteCard={deleteCard}
      editCard={buildModal}
    />
  )

  let modal = null;

  if (modalType === "add") modal = (
    <Modal
      submit={addCardHandler}
      cancel={setInitialState}
      changed={inputChangedHandler}
      value={value}
    />
  )
  if (modalType === "edit") modal = (
    <Modal
      submit={editCardHandler}
      cancel={setInitialState}
      changed={inputChangedHandler}
      value={value}
    />
  )

  return (
    <Wrapper>
      {cardList}
      {modal}
      <AddCardButton onClick={() => buildModal('add')}>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </AddCardButton>
    </Wrapper>
  );
}

export default LoveList;
