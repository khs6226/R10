import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/api';
import About from '../js/screens/About/';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <About />
      </ApolloProvider>
    )
  }
};

export default App;
