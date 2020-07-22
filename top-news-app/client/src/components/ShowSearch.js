import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: 3rem;
  right: 3rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 4px 0 black;
  cursor: pointer;
  transition: .2s all ease-out;
  justify-content: center;
  z-index: 9999;

  :hover {
    transform: scale(1.1) translateY(-.2rem);
  }

  :active {
    transform: translateY(0);
  }


  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const showSearch = (props) => {
  const { display, clicked } = props;

  return (
    <Wrapper onClick={clicked}>
      <FontAwesomeIcon icon={display ? faTimes : faSearch} size="xl" />
    </Wrapper>
  );
};

showSearch.propTypes = {
};

export default showSearch
