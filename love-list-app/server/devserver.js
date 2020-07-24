require('dotenv').config();
require('./models');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema');

const app = express();

const MLAB_URI = `mongodb://${process.env.MLAB_DB_USER}:${process.env.MLAB_DB_PASSWORD}@ds263048.mlab.com:63048/love-list`

mongoose.Promise = global.Promise;
mongoose.connect(MLAB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`connected to mongoDB`));

app.use(cors());
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 4203;

app.listen(PORT, () => console.log(`love app running on port ${PORT}`));