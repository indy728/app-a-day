const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js');
require('dotenv').config();

const app = express();

// Allow cross-origin resource sharing
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`weather app running on port ${PORT}`));
