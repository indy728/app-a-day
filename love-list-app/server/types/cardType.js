const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = require('graphql');

const CardType = new GraphQLObjectType({
  name:  'CardType',
  fields: () => ({
    _id: { type: GraphQLID },
    date: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

module.exports = CardType;