import React from 'react';
import styled from 'styled-components';
import { device } from 'theme/media';

const Wrapper = styled.div`
  width: 30rem;
  padding: 1rem;
  border: 1px inset grey;
  border-radius: 4px;

  > :not(:first-child) {
    margin-top: 2rem;
  }

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const FlexSpacer = styled.div`
  flex: 1;
`;

const ToggleSwitch = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  margin: 0 .4rem;
  transition: .2s all ease-in-out;

  transform: ${({ imperial }) => (
    imperial
      ? `translateX(0)`
      : `translateX(4.8rem)`
  )};
`;

const UnitsButtons = styled.div`
  width: 10rem;
  flex-direction: row;
  border-radius: 5rem;
  overflow: hidden;
  background-color: grey;
  position: relative; 
`;

const UnitsButton = styled.div`
  width: 5rem;
  height: 5rem;
  justify-content: center;
  z-index: 9999;
`;

const SearchForm = styled.form`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

const TextInput = styled.input`
  height: 3rem;
  padding-left: 1rem;
  text-align: left;
  font-size: 1.8rem;
  width: 18rem;
`;

const Lookup = styled.div`
  align-items: flex-start;
  width: 18rem;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const Submit = styled.input`
  height: 3rem;
  font-size: 1.4rem;
  padding: 0 1rem;
  justify-content: center;
  background-color: ${({ disabled }) => (
    disabled ? 'inherit' : 'orangered'
  )};
  color: ${({ disabled }) => (
    disabled ? 'inherit' : 'white'
  )};
  border: 1px solid ${({ disabled }) => (
    disabled ? 'inherit' : 'white'
  )};
  border-radius: 4px;
  border-style: solid;
`

const WeatherOptions = (props) => {
  const { 
    imperial, toggleUnits, zipcodeInputChanged, zipcodeSubmit, 
    zipcodeValue, zipcodeValid,
  } = props;

  return (
    <Wrapper>
      <UnitsButtons
        imperial={imperial}
        onClick={toggleUnits}
        >
        <UnitsButton>˚F</UnitsButton>
        <FlexSpacer />
        <UnitsButton>˚C</UnitsButton>
        <ToggleSwitch imperial={imperial} />
      </UnitsButtons>

      <SearchForm onSubmit={(e) => zipcodeSubmit(e)}>
        <Lookup>
          <label>Zipcode</label>
          <TextInput
            type="text"
            placeholder="ex: 94122"
            onChange={(e) => zipcodeInputChanged(e)}
            value={zipcodeValue}
          />
        </Lookup>
        <Submit type="submit" value="Look Up" disabled={!zipcodeValid} />
      </SearchForm>
    </Wrapper>
  );
};

WeatherOptions.propTypes = {
};

export default WeatherOptions
