import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
`;

class CardList extends Component {
  state = {

  }

  render() {
    const { data } = this.props;
    let cardList = null;

    if ( data && data.cards ) {
      const { cards } = data;
      cardList = data.cards.sort((a, b) => Number(b.dateNumber) - Number(a.dateNumber)).map((card) => (
        <Card key={card._id}>
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
}

CardList.propTypes = {
};

const query = gql`
  {
    cards {
      _id
      dateString
      dateNumber
      content
    }
  }
`;

export default graphql(query)(CardList);
