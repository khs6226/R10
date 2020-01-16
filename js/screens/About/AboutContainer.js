import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import About from './About';

const QUERY_ABOUT = gql`
    query {
        allConducts {
            id
            title
            
        }
    }
`;

const CodeofConduct = () => {
    const { loading, error, data } = useQuery(QUERY_ABOUT);
    
    if(loading) return <Text>Loading</Text>;
    if(error) return <Text>error</Text>;
    
    console.log(data.allConducts);

    return <About data = {data}/>; 
};

class AboutContainer extends Component {
    render() {
        return (
            <CodeofConduct />
        )
    }
}


export default AboutContainer;