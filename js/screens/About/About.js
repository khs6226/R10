import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import CodeofConduct from '../../components/CodeofConduct';

const QUERY_ABOUT = gql`
    query {
        allConducts {
            id
            title
            description
        }
    }
`;


const About = () => {
    const { loading, error, data } = useQuery(QUERY_ABOUT);

    if(loading) {
        return (
            <Text>Loading</Text>
        )
    } else if(error) {
        return (
            <Text>Error</Text>
        )
    } else {
        return (
            <ScrollView>
                {data.allConducts.map(data => (
                    <CodeofConduct key = {data.id}
                                   data = {data} />
                    ))}
            </ScrollView>
        )
    }
}


export default About;