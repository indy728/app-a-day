const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull, } = graphql;
const mongoose = require('mongoose');
const Card = mongoose.model('card');
const { CardType } = require('../types');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCard: {
      type: CardType,
      args: {
        dateString: { type: GraphQLNonNull(GraphQLString) },
        dateNumber: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { dateString, dateNumber, content }) {
        return (new Card({ dateString, dateNumber, content })).save()
      }
    },
    deleteCard: {
      type: CardType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Card.deleteOne({ _id: mongoose.Types.ObjectId(id) });
      }
    }
  }
});

module.exports = mutation;