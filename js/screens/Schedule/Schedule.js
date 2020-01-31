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


const Schedule = () => {
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
            <ScrollView style = {styles.container}>
                <Image style = {styles.logo}
                       source = {require('../../../assets/images/r10_logo.png')}
                />
                <View>
                    <Text>Schedue Page</Text>
                </View>

            </ScrollView>
        )
    }
}


export default Schedule;