import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(4, 30, 21, .8);
  justify-content: center;
  position: fixed;
  top: 0;
  flex-direction: column-reverse;

  * {
    color: white;
  }

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
    color: black;
    padding: 0 1rem;
  }

  @media ${device.sm} {
    flex-direction: row;
    justify-content: space-evenly;

    input {
      text-align: left;
    }
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
  width: 10rem;
  background-color: lightgreen;
  padding: .5rem 1rem;
  border: 2px solid white;
  border-radius: 2px;
`;

const RadioWrapper = styled.label`
  flex-direction: row;

  > :first-child {
    margin-right: 1rem;
  }
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
            Go
          </Submit>
        </Input>
        <Radio>
          <RadioWrapper>
              <input
                type="radio"
                name="searchType"
                value="top"
                checked={searchOption === 'top'}
                onChange={searchOptionChanged}
              />
              <p>Search Top Stories</p>
          </RadioWrapper>
          <RadioWrapper>
              <input
                type="radio"
                name="searchType"
                value="everything"
                checked={searchOption === 'everything'}
                onChange={searchOptionChanged}
              />
              <p>Search Everything</p>
          </RadioWrapper>
        </Radio>
      </Form>
    </Wrapper>
  );
};

Search.propTypes = {
};

export default Search
