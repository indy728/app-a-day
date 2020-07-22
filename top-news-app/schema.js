const NewsAPI = require('newsapi');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require('graphql');

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    source: {
      type: new GraphQLObjectType({
        name: 'Source',
        fields: () => ({ name: { type: GraphQLString }})
      })
    },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    urlToImage: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
  })
})

const NewsResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    status: { type: GraphQLString },
    totalResults: { type: GraphQLInt },
    articles: { type: GraphQLList( ArticleType )}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    topHeadlines: { 
      type: NewsResponseType,
      args: {
        keyword: { type: GraphQLString }
      },
      resolve(parent, args) {
        return newsapi.v2.topHeadlines({
          q: args.keyword,
          country: 'us',
          language: 'en',
        })
        .then(res => {
          return res
        })
        .catch(er => console.error(er));
      }
    },
    everything: { 
      type: NewsResponseType,
      args: {
        keyword: { type: GraphQLString }
      },
      resolve(parent, args) {
        return newsapi.v2.everything({
          q: args.keyword,
          language: 'en',
        })
        .then(res => {
          return res
        })
        .catch(er => console.error(er));
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})