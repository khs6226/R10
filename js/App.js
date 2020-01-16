import React, { Component } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/api';
import About from '../js/screens/About';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <About />
    </ApolloProvider>
  )
};

export default App;
