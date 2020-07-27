import React from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
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

const CardList = ({ data, deleteCard, editCard }) => {
  let cardList = null;

  if ( data && data.cards ) {
    const { cards } = data;
    cardList = cards.sort((a, b) => Number(b.dateNumber) - Number(a.dateNumber))
      .map((card) => { 
        const { _id: id, dateString, content } = card;

        return (
          <Card key={id}>
            <Icon className="icon edit" onClick={() => editCard({ variables: { id: card._id } })}>
              <FontAwesomeIcon icon={faEdit} />
            </Icon>
            <Icon className="icon close" onClick={() => deleteCard({ variables: { id: card._id } })}>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
            <div className="date">{dateString}</div>
            <div className="content">{content}</div>
          </Card>
        )
      })
  }

  return (
    <Wrapper>
      {cardList}
    </Wrapper>
  );
}

export default CardList;
