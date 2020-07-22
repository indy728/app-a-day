const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./schema');


const app = express();

// un comment when you get CORS errors
// app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`news app running on port ${PORT}`));