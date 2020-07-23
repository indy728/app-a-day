import React from 'react';
import styled from 'styled-components';
import { device } from 'theme/media';

const Wrapper = styled.div`
  margin-bottom: 2rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Poster = styled.div`
  width: 30rem;
  height: calc(750 / 500 * 30rem);
  background-image: url(${({ src }) => src});
  background-size: cover;
`

const Flick = ({ poster, title }) => {

  return (
    <Wrapper>
      <Poster
        src={poster}
      />
      <div>{title}</div>
    
    </Wrapper>
  );
};

Flick.propTypes = {
};

export default Flick
