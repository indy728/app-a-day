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

const TextAreaModal = ({ cancel, submit, changed, value }) => {

  return (
    <Wrapper>
    
    </Wrapper>
  );
};

TextAreaModal.propTypes = {
};

export default TextAreaModal
