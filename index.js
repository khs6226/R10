/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://r10.academy.red/graphql',
})

client.query({
    query: gql`
        {
            allConducts {
                id
                title
                order
            }
        }
    `
}).then(result => console.log(result));

AppRegistry.registerComponent(appName, () => App);
