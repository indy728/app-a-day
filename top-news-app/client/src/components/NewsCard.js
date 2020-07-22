import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 30rem;
  padding: 2rem 3rem;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 4px 0 black;
  position: relative;

  &:not(:first-child) {
    margin-top: 5rem;
  }

  > :not(.source):not(:first-child) {
    margin-top: 2rem;
  }

  @media ${device.sm} {
    width: 50rem;
  }

  @media ${device.md} {
  }

  @media ${device.lg} {
    width: 80rem;
  }

  @media ${device.xl} {}
`;

const Source = styled.div`
  padding: .2rem .5rem;
  background-color: red;
  color: white;
  border: 2px outset white;
  border-radius: 4px;
  position: absolute;
  top: .5rem;
  left: .5rem;
`;

const Headline = styled.div`
  a {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  font-size: 1.4rem;
  font-family: sans-serif;

  a {
    display: inline-block;
  }
`;

const NewsImage = styled.div`
  width: 24rem;
  height: calc(5 / 7 * 20rem);
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  border: 1px solid black;
`;

const NewsCard = (props) => {
  const { source, title, description, url, image } = props;
  const href = (value) => (
    <a href={url} target="_blank" rel="noopener noreferrer">{value}</a>
  )
    
  return (
    <Wrapper>
      <NewsImage src={image} />
      <Headline>{href(title)}</Headline>
      <Description>{description}</Description>
      <Source className="source">{source}</Source>
    </Wrapper>
  );
};

NewsCard.propTypes = {
};

export default NewsCard
