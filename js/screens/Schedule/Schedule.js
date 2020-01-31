import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { gql, from } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import SessionsList from '../../components/SessionsList'
import styles from './style'

const QUERY_SCHEDULE = gql`
    query {
        allSessions {
            id
            title
            description
            location
            startTime
        }
    }
`;


const Schedule = () => {
    const { loading, error, data } = useQuery(QUERY_SCHEDULE);

    if (loading) {
        return (
            <Text>Loading</Text>
        )
    } else if (error) {
        return (
            <Text>Error</Text>
        )
    } else {
        // console.log(data);
        return (
            <View style={styles.container}>
                <SessionsList data = {data.allSessions} />
            </View>
        )
    }
}


export default Schedule;