import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Input = (props) => {
  const { prop } = props;

  return (
    <Wrapper>
    
    </Wrapper>
  );
};

Input.propTypes = {
};

export default Input
