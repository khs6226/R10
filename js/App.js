import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/api';
import AboutContainer from '../js/screens/About/AboutContainer';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AboutContainer />
      </ApolloProvider>
    )
  }
};

export default App;
