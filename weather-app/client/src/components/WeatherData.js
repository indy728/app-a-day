import React from 'react';
import styled from 'styled-components';
import { device } from 'theme/media';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const weatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

const ZIP_QUERY = gql`
  query ZipQuery($zipcode: String) {
    coords(zipcode: $zipcode) {
      name
      coord {
        lon
        lat
      }
    }
  }
`
const WEATHER_QUERY = gql`
  query WeatherQuery($lon: String, $lat: String, $units: String) {
    weather(lon: $lon, lat: $lat, units: $units) {
      current {
        temp
        feels_like
        humidity
        uvi
        weather {
          description
          icon
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 30rem;
  padding: 4rem;
  margin-bottom: 5rem;
  border-radius: 4px;
  background-image: linear-gradient(165deg, white 35%, grey);

  .name {
    text-align: center;
  }

  @media ${device.sm} {}


  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const WeatherIcon = styled.div`
  width: 18rem;
  height: 18rem;

  img {
    width: 100%;
    height: auto;
  }
`

const TempRow = styled.div`
  margin-bottom: 4rem;

  .temp {
    &__main {
      font-size: 3.2rem;
      color: orangered;
    }

    &__description {
      margin-top: 2rem;
      font-size: 1.8rem;
      text-transform: uppercase;

      > :first-child {
        font-size: 2.4rem;
      }
    }
  }

  /* @media ${device.md} {
    flex-direction: row;
    justify-content: space-evenly;
    height: 10rem;
  } */
`;

const WeatherDetails = styled.div``;


const WeatherData = (props) => {
  const { zipcode, units } = props;

  const weatherData = (
    <Query query={ZIP_QUERY} variables={{ zipcode }}>
        {
          ({ loading, error, data: { coords: { name, coord } = {} } = {} }) => {
            if (loading) return <h1>... Loading</h1>
            if (error) { console.log(error); return null; }
            if (!name || !coord) {
              return (
                <div>
                  <h3>{`No data for zipcode ${zipcode}`}</h3>
                  <p>please double-check your zipcode and re-enter</p>
                </div>
              )
            }
            return (
              <Query
                query={WEATHER_QUERY}
                variables={{
                  lon: `${coord.lon}`,
                  lat: `${coord.lat}`,
                  units,
                }}
                skip={coord === undefined}
                >
                {
                  ({ loading: wLoading, error: wError, data: wData }) => {
                    if (wLoading) return <h1>... Loading</h1>
                    if (wError) { console.log(wError); return; }
                    const {
                      current: {
                        temp,
                        feels_like,
                        humidity,
                        uvi,
                        weather,
                      },
                    } = wData.weather;
                    const { icon, description } = weather[0];
                    return (
                      <div>
                        <WeatherDetails>
                          <div className="name">
                            <h1>{name}</h1>
                          </div>
                          <WeatherIcon>
                            <img src={weatherIconUrl(icon)} alt={description} />  
                          </WeatherIcon>
                          <TempRow>
                            <div className="temp__main">
                              {`${Math.round(temp)} ˚${units === 'imperial' ? 'F' : 'C'}`}
                            </div>
                            <div className="temp__description">
                              <div>{description}</div>
                              <div>{`Feels Like: ${Math.round(feels_like)} ˚${units === 'imperial' ? 'F' : 'C'}`}</div>
                            </div>
                          </TempRow>
                          <div>
                            Humidity: {humidity}
                          </div>
                          <div>
                            UV: {Math.round(uvi)}
                          </div>
                        </WeatherDetails>
                      </div>
                    )
                  }
                }
              </Query>
            )
          }
        }
      </Query>
  )

  return (
    <Wrapper>
      {weatherData}
    </Wrapper>
  );
};

WeatherData.propTypes = {
};

export default WeatherData
