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
        date: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { date, content }) {
        return (new Card({ date, content })).save()
      }
    },
    deleteCard: {
      type: CardType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parentValue, { id }) {
        return Card.deleteOne({ _id: ObjectId(id) });
      }
    }
  }
});

module.exports = mutation;