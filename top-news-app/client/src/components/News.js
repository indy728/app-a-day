import React, { Component } from 'react'
import styled from 'styled-components'
import { device } from 'themes/media';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import NewsCard from './NewsCard';
import ShowSearch from './ShowSearch';
import Search from './Search';

const TOP_HEADLINES = gql`
  query TopQuery($keyword: String) {
    topHeadlines(keyword: $keyword) {
      status
      totalResults
      articles{
        source {
          name
        }
        title
        description
        url
        urlToImage
      }
    }
  }
`;

const ALL_ARTICLES = gql`
  query AllQuery($keyword: String) {
    everything(keyword: $keyword) {
      status
      totalResults
      articles{
        source {
          name
        }
        title
        description
        url
        urlToImage
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 5rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class News extends Component {
  state = {
    search: false,
    keyword: '',
    searchInput: {
      value: '',
      radio: 'top',
    },
    searchOption: 'top',
  }

  toggleSearchHandler = () => {
    this.setState((prevState) => ({ search: !prevState.search }))
  }

  searchInputChangeHandler = (e) => {
    const updatedInput = { ...this.state.searchInput }
    updatedInput.value = e.target.value;

    this.setState({ searchInput: updatedInput })
  }

  searchSubmitHandler = (event) => {
    event.preventDefault();
    const { value, radio } = this.state.searchInput

    this.setState({ 
      search: false,
      keyword: value,
      searchOption: radio,
    })
  }

  searchOptionChangedHandler = (e) => {
    const updatedInput = { ...this.state.searchInput }
    updatedInput.radio = e.target.value;

    this.setState({ searchInput: updatedInput })
  }

  render() {
    const { search, keyword, searchInput: { value, radio }, searchOption } = this.state;
    const category = searchOption === 'top' ? 'topHeadlines' : 'everything';
    const noResultsText = searchOption === 'top' ? 'top headlines' : 'any current articles';
    
    const headlines = (
      <Query query={searchOption === 'top' ? TOP_HEADLINES : ALL_ARTICLES} variables={{ keyword }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <h1>...loading</h1>
            if (error) { console.error(error); return <h1>There was an error receiving data</h1> }
            if (!data[category]) return <h1>No Data</h1>
            const { totalResults, articles } = data[category];
            if (totalResults === 0) {
              return (
              <h1>{`No results found for "${keyword}" in ${noResultsText}`}</h1>
              )
            }
            return articles.slice(0, 10).map((article) => {
              const { source: { name: source } = {}, title, description, url, urlToImage: image} = article
              return (
                <NewsCard
                  key={url}
                  source={source}
                  title={title}
                  description={description}
                  url={url}
                  image={image}
                />
            )})
          }
        }
      </Query>
    )

    return (
      <Wrapper>
        {headlines}
        <ShowSearch
          display={search}
          clicked={this.toggleSearchHandler}
          />
        {search 
          ? <Search
              submit={this.searchSubmitHandler}
              value={value}
              searchChanged={this.searchInputChangeHandler}
              searchOption={radio}
              searchOptionChanged={this.searchOptionChangedHandler}
            /> 
          : null}
      </Wrapper>
    );
  } 
}

News.propTypes = {
};

export default News
