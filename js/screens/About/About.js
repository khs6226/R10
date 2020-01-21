import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { gql, from } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import CodeofConduct from '../../components/CodeofConduct';
import styles from './style'

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
                <Image 
                    style = {styles.logo}
                    source = {require('../../../assets/images/r10_logo.png')}/>
                {data.allConducts.map(data => (
                    <CodeofConduct key = {data.id}
                                   data = {data} />
                    ))}
            </ScrollView>
        )
    }
}


export default About;