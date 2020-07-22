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

  }

  toggleSearchHandler = () => {
    this.setState((prevState) => ({ search: !prevState.search }))
  }

  render() {
    const { search } = this.state;
    const headlines = (
      <Query query={TOP_HEADLINES} >
        {
          ({ loading, error, data }) => {
            if (loading) return <h1>...loading</h1>
            if (error) { console.error(error); return <h1>There was an error receiving data</h1> }
            console.log(data)
            if (!data.topHeadlines) return <h1>No Data</h1>
            const { status, totalResults, articles } = data.topHeadlines;
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
        {search ? <Search /> : null}
      </Wrapper>
    );
  } 
}

News.propTypes = {
};

export default News
