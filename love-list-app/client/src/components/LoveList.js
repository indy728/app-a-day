import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AddCard from './AddCard';
import CardList from './CardList';

const Wrapper = styled.div`
  padding: 5rem 0;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

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
      }
    }).then(res => console.log(res))

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

    return (
      <Wrapper>
        <CardList />
        <AddCard
          visible={showForm}
          submit={this.addCardHandler}
          cancel={this.toggleFormHandler}
          changed={this.inputChangedHandler}
          value={value}
        />
        <div onClick={this.toggleFormHandler}>
          Add
        </div>
      </Wrapper>
    );
  } 
}

LoveList.propTypes = {
};

const mutation = gql`
  mutation AddCard($dateString: String!, $dateNumber: String!, $content: String!) {
    addCard(dateString: $dateString, dateNumber: $dateNumber, content: $content) {
      _id
    }
  }
`;

export default graphql(mutation)(LoveList);
