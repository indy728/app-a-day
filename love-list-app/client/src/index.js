import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: "/graphql",
})

const app = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
