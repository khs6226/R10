import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    )
  }
};

export default App;
