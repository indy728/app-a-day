const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, } = graphql;
const CardType = require('./cardType');
const Card = mongoose.model('card');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    cards: {
      type: GraphQLList(CardType),
      resolve() {
        return Card.find({});
      }
    },
  })
});

module.exports = RootQuery;
