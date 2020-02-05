import React, {useContext} from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './style'
import { withNavigation, NavigationEvents } from 'react-navigation';
import {FavesContext} from '../../context/FavesContext/FavesContext';
import sortStartTime from '../../lib/sortStartTime';
import Icon from 'react-native-vector-icons/Ionicons';

const QUERY_SCHEDULE = gql`
    query {
        allSessions {
            id
            title
            location
            startTime
        }
    }
`;

const Faves = ({ navigation }) => {
    const { loading, error, data } = useQuery(QUERY_SCHEDULE);
    const {faves, writeItemToStorage} = useContext(FavesContext);

    if (loading) {
        return (
            <Text>Loading</Text>
        )
    } else if (error) {
        return (
            <Text>Error</Text>
        )
    } else {
        return (
            <View>
                <SectionList
                    sections={data.allSessions.filter(data => faves.includes(data.id)).reduce(sortStartTime, [])}
                    keyExtractor={data => data.id}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View>
                                <TouchableOpacity onPress={() => navigation.push('Session', item)}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.locationContainer}>
                                <Text style={styles.location}>{item.location}</Text>
                                <TouchableOpacity onPress={() => writeItemToStorage(item.id)}>
                                    {faves && faves.includes(item.id) ? (
                                        <Icon name="ios-heart" size={20} color="red" />
                                    ) : <Icon name="ios-heart-empty" size={20} />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )} />
            </View>
        )
    }
}


export default withNavigation(Faves);