import React, { Component } from 'react'
import styled from 'styled-components'
import WeatherData from './WeatherData'
import WeatherOptions from './WeatherOptions';


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 5rem 0;
`;

const initialState = {
  zipcode: '94122',
  units: 'imperial',
  zipcodeInput: {
    value: '',
    valid: false,
    touched: false,
  }
}

class Weather extends Component {
  state = {
    zipcode: '94122',
    units: 'imperial',
    zipcodeInput: {
      value: '',
      valid: false,
      touched: false,
    }
  }

  zipcodeInputChangedHandler = (e) => {
    const { target: { value } } = e;
    const { zipcodeInput } = this.state;
    const updatedZipcodeInput = { ...zipcodeInput };
    const regNum = /^\d+$/;

    if (value.length <= 5 && regNum.test(value[value.length - 1])) {
      updatedZipcodeInput.value = value;
      updatedZipcodeInput.touched = true;
    }
    if (value.length === 5) updatedZipcodeInput.valid = true;

    this.setState({ zipcodeInput: updatedZipcodeInput })
  }

  zipcodeSubmitHandler = (e) => {
    const { zipcodeInput: { value } } = this.state;

    e.preventDefault();
    this.setState({
      zipcode: value,
      zipcodeInput: initialState.zipcodeInput,
    })    
  }

  toggleUnitsHandler = () => {
    this.setState((prevState) => ({ units: prevState.units === 'imperial' ? 'metric' : 'imperial' }))
  }

  render() {
    const { zipcode, units, zipcodeInput: { value, valid } } = this.state;

    return (
      <Wrapper>
        <WeatherData
          zipcode={zipcode}
          units={units}
        />
        <WeatherOptions
          imperial={units === 'imperial'}
          toggleUnits={this.toggleUnitsHandler}
          zipcodeInputChanged={this.zipcodeInputChangedHandler}
          zipcodeSubmit={this.zipcodeSubmitHandler}
          zipcodeValue={value}
          zipcodeValid={valid}
        />
      </Wrapper>
    );
  } 
}

Weather.propTypes = {
};

export default Weather
