const fetch = require('node-fetch');
const axios = require('axios')
const {
  GraphQLObjectType, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLList, GraphQLSchema,
} = require('graphql');

const zipEndpoint = (zipcode) => `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.WEATHER_API_KEY}`;
const oneCallEndpoint = (lon, lat) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`;

const GeoCoordsType = new GraphQLObjectType({
  name: 'GeoCoords',
  fields: () => ({
    coord: {
      type: new GraphQLObjectType({
        name: 'LatLon',
        fields: () => ({
          lon: {
            type: GraphQLFloat,
          },
          lat: {
            type: GraphQLFloat,
          },
        }),
      })
    }
  }),
});

const CurrentWeatherType = new GraphQLObjectType({
  name: 'Current',
  fields: () => ({
    temp: { type: GraphQLFloat },
    feels_like: { type: GraphQLFloat },
    humidity: { type: GraphQLFloat },
    uvi: { type: GraphQLFloat },
    temp: { type: GraphQLFloat },
    weather: {
      type: GraphQLList(new GraphQLObjectType({
      name: 'CurrentWeather',
      fields: () => ({
        description: { type: GraphQLString },
        icon: { type: GraphQLString },
      })
    }))
  }
  })
})

// const WeatherDetails = new GraphQLObjectType({
//   name: 'WeatherDetails',
//   fields: () => ({
//     main: {
//       type: GraphQLString,
//     },
//     description: {
//       type: GraphQLString,
//     },
//     icon: {
//       type: GraphQLString,
//     },
//   }),
// });

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: () => ({
    current: { type: CurrentWeatherType },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    coords: {
      type: GeoCoordsType,
      args: {
        zipcode: {
          type: GraphQLString,
        }
      },
      resolve(parent, args) {
        return fetch(zipEndpoint(args.zipcode))
          .then(response => response.json())
          .catch(er => console.error(er));

        // The below also works:

        // return axios.get(zipEndpoint(args.zipcode))
        //   .then(res => res.data)
        //   .catch(er => console.error(er));
      }
    },
    weather: {
      type: WeatherType,
      args: {
        lat: { type: GraphQLString },
        lon: { type: GraphQLString },
      },
      resolve(parent, args) {
        return fetch(oneCallEndpoint(args.lon, args.lat))
          .then(response => response.json())
          .catch(er => console.error(er));
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
