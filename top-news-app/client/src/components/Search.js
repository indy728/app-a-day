import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(4, 30, 21, .8);
  height: 11rem;
  justify-content: center;
  position: fixed;
  top: 0;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Radio = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  `;

const Input = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.form`
  width: 30rem;

  > div {
    width: 100%;
  }

  @media ${device.sm} {
    width: 50rem;
  }

  @media ${device.md} {}

  @media ${device.lg} {
  }
`;

const Submit = styled.div`

`;

const Search = (props) => {
  const { prop } = props;

  const submit = () => document.forms['search-form'].submit();

  return (
    <Wrapper>
      <Form>
        <Input>
          <input type="text" />
          <Submit 
            onClick={submit}
          >
            Search News
          </Submit>
        </Input>
        <Radio>
          <input type="radio" name="searchType" id="topStories" /><label for="topStories">Search Top Stories</label>
          <input type="radio" name="searchType" id="everything" /><label for="everything">Search Everything</label>
        </Radio>
      </Form>
    </Wrapper>
  );
};

Search.propTypes = {
};

export default Search
