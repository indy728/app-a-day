import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AddCard from './AddCard';
import CardList from './CardList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

// const AddCardButton = styled.div`
//   width: 4rem;
//   height: 4rem;
//   position: fixed;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 2px ${({ theme }) => theme.primary};
//   top: 1rem;
//   right: 1rem;
//   justify-content: center;
//   font-size: 1.4rem;

//   * {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

const initialState = {
  showForm: false,
  value: '',
}

class LoveList extends Component {
  state = {
    showForm: false,
    value: '',
    // valid: false,
  }

  addCardHandler = () => {
    const { value: content } = this.state;

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
    this.props.mutate({
      variables: {
        dateString,
        dateNumber,
        content,
      },
    }).then(res => console.log(res))

    this.setState(initialState)
  }

  cancelFormHandler = () => {
    this.setState(initialState)
  }

  inputChangedHandler = (event) => {
    this.setState({ value: event.target.value})
  }

  toggleFormHandler = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  }

  render() {
    const { showForm, value } = this.state;
    const cardList = <CardList />

    return (
      <Wrapper>
        <CardList 
          formVisible={showForm}
          formSubmit={this.addCardHandler}
          formCancel={this.cancelFormHandler}
          formChanged={this.inputChangedHandler}
          formValue={value}
          formToggle={this.toggleFormHandler}
        />
        {/* <AddCard
          visible={showForm}
          submit={this.addCardHandler}
          cancel={this.toggleFormHandler}
          changed={this.inputChangedHandler}
          value={value}
        />
        <AddCardButton onClick={this.toggleFormHandler}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </AddCardButton> */}
      </Wrapper>
    );
  } 
}

LoveList.propTypes = {
};

const ADD_CARD = gql`
  mutation ADD_CARD($dateString: String!, $dateNumber: String!, $content: String!) {
    addCard(dateString: $dateString, dateNumber: $dateNumber, content: $content) {
      _id
    }
  }
`;

export default graphql(ADD_CARD)(LoveList);
