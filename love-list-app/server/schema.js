const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const { RootQueryType } = require('./types');
const { CardMutation } = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: CardMutation
});