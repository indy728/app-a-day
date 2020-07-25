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
    dateString: { type: GraphQLString },
    dateNumber: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

module.exports = CardType;