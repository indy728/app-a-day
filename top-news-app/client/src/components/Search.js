import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(4, 30, 21, .8);
  justify-content: center;
  position: fixed;
  top: 0;
  flex-direction: column-reverse;


  @media ${device.sm} {
    height: 11rem;
    flex-direction: column;
  }

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Radio = styled.div`

  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Input = styled.div`
  

  input {
    width: 30rem;
    height: 3rem;
    font-size: 1.8rem;
  }

  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Form = styled.form`
  width: 30rem;

  > div {
    width: 100%;
    margin: .5rem 0;
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
  const { submit, value, searchChanged, searchOption, searchOptionChanged } = props;

  return (
    <Wrapper>
      <Form id="search-form">
        <Input>
          <input type="text" value={value} onChange={(e) => searchChanged(e)} />
          <Submit 
            onClick={(e) => submit(e)}
          >
            Search News
          </Submit>
        </Input>
        <Radio>
          <div>
            <label>
              <input
                type="radio"
                name="searchType"
                value="top"
                checked={searchOption === 'top'}
                onChange={searchOptionChanged}
              />
              Search Top Stories
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="searchType"
                value="everything"
                checked={searchOption === 'everything'}
                onChange={searchOptionChanged}
              />
              Search Everything
            </label>
          </div>
        </Radio>
      </Form>
    </Wrapper>
  );
};

Search.propTypes = {
};

export default Search
