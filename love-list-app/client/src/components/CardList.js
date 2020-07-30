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
    font-size: 1.2rem;
    font-family: serif;
    margin-top: 2rem;
    justify-self: flex-end;
  }

  .content {
    font-size: 2.2rem;
    /* width: 100%; */
    font-family: sans-serif;
  }

  :hover {
    .icon {
      display: flex;
    }
  }

  @media ${device.lg} {
    align-items: flex-start;

    .content {
      text-align: left;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 0;
  padding: .5rem;
  transition: .1s all ease-in-out;

  * {
    color: ${({ theme }) => theme.primary};
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
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
  const cards = data.slice()
  const cardList = cards.sort((a, b) => Number(b.dateNumber) - Number(a.dateNumber))
    .map((card) => { 
      const { _id: id, dateString, content } = card;

      return (
        <Card key={id}>
          <Icon className="icon edit" onClick={() => editCard('edit', content, id)}>
            <FontAwesomeIcon icon={faEdit} />
          </Icon>
          <Icon className="icon close" onClick={() => deleteCard({ variables: { id } })}>
            <FontAwesomeIcon icon={faTimes} />
          </Icon>
          <div className="content">{content}</div>
          <div className="date">{dateString}</div>
        </Card>
      )
    })

  return (
    <Wrapper>
      {cardList}
    </Wrapper>
  );
}

export default CardList;
