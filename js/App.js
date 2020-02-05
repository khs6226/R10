import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import FavesProvider from './context/FavesContext/FavesContext';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    )
  }
};

export default App;
