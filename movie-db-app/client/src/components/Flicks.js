import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from 'theme/media';
import Flick from './Flick';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const MOVIE_QUERY = gql`
  query MovieQuery($query: String) {
    movies(query: $query) {
      id
      title
      poster_path
    }
  }
`;

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const SelectButtons = styled.div`
  width: 100%;
  padding: 2rem;
  justify-content: space-evenly;

  @media ${device.lg} {
    width: 80rem;
    flex-direction: row;
  }
`;

const SelectButton = styled.div`
  width: 30rem;
  height: 6rem;
  font-size: 2.4rem;
  font-weight: 600;
  justify-content: center;
  text-transform: uppercase;
  color: red;
  background-color: white;
  box-shadow: 2px 1px 10px grey;
  cursor: pointer;
  border: 2px solid ${({ theme: { button: { enabled} }}) => enabled.color};
  color: ${({ theme: { button: { enabled} }}) => enabled.color};
  background-color: ${({ theme: {button: { enabled} }}) => enabled.background};

  &.active {
    border: 2px solid ${({ theme: { button: { disabled} }}) => disabled.color};
    color: ${({ theme: { button: { disabled} }}) => disabled.color};
    background-color: ${({ theme: {button: { disabled} }}) => disabled.background};
    pointer-events: none;
  }

  &:not(:first-child) {
    margin: 1rem 0 0 0;
  }

  @media ${device.lg} {
    margin: 0;
  }
`;

const MovieList = styled.div`
  padding: 1rem 2rem;
  border: 1px inset white;
  background-image: linear-gradient(to bottom right, dodgerblue, ghostwhite);
  height: calc(750 * 1.75 / 500 * 30rem);
  overflow: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 80rem;
  margin-bottom: 2rem;
`;

const Banner = styled.div`
  height: 8rem;
  margin: 3rem 0%;
  padding: 1rem 2rem;
  font-family: serif;
  font-size: 3.2rem;
  justify-content: center;
`;

class Flicks extends Component {
  state = {
    nowPlaying: true,
  }

  toggleNowPlayingHandler = () => {
    this.setState((prevState) => ({ nowPlaying: !prevState.nowPlaying }))
  }

  render() {
    const { nowPlaying } = this.state;

    const flicks = (
      <Query query={MOVIE_QUERY} variables={{
        query: nowPlaying
          ? 'now_playing'
          : 'upcoming'
      }}>
          {
            ({ loading, error, data: { movies } = {} }) => {
              if (loading) return <h1>... Loading</h1>
              if (error) { console.log(error); return; }
              return (
                movies.map(({ id, title, poster_path }) => {
                  const posterUrl = `http://image.tmdb.org/t/p/w500/${poster_path}`

                  return (
                    <Flick key={id}
                      poster={posterUrl}
                      title={title}
                    />
                  )
                })
              )
            }
          }
        </Query>
    )

    const marqueeText = nowPlaying
          ? 'Now Showing'
          : 'Coming Soon';

    return (
      <Wrapper>
        <SelectButtons>
          <SelectButton
            className={nowPlaying ? 'active' : 'inactive'}
            onClick={this.toggleNowPlayingHandler}
          >
            Now Playing
          </SelectButton>
          <SelectButton
            className={nowPlaying ? 'inactive' : 'active'}
            onClick={this.toggleNowPlayingHandler}
          >
            Upcoming
          </SelectButton>
          
        </SelectButtons>
        <Banner>
          {marqueeText}
        </Banner>
        <MovieList>
          {flicks}
        </MovieList>
      </Wrapper>
    );
  } 
}

Flicks.propTypes = {
};

export default Flicks
