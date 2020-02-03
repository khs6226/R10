import React, { useContext } from 'react';
import { View, Text, ScrollView, Image, SectionList, TouchableOpacity } from 'react-native';
import { gql, from } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './style'
import { withNavigation } from 'react-navigation';
import FavesProvider from '../../context/FavesContext/FavesContext';
import Icon from 'react-native-vector-icons/Ionicons';

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

const changeTimeFormat = (t) => {
    let date = new Date(t);
    let hours = date.getHours();
    if (hours == 12) {
        hours = hours + ":00 PM"
    } else if (hours < 10) {
        hours = '0' + hours + ":00 AM";
    } else if (hours > 12) {
        hours = hours - 12;
        if (hours < 10) {
            hours = '0' + hours + ":00 PM"
        } else {
            hours = hours + ":00 PM"
        }
    } else {
        hours = hours + ":00 AM"
    }
    return hours;
}

const sortStartTime = (accu, curr) => {
    let currentTime = changeTimeFormat(curr.startTime);
    const doesExist = accu.find(section => section.title === currentTime);

    if (doesExist) {
        doesExist.data.push(curr)
    } else {
        accu.push({
            title: currentTime,
            data: [curr]
        });
    }
    return accu;
};

const Schedule = ({ navigation }) => {
    const { loading, error, data } = useQuery(QUERY_SCHEDULE);
    const [faves, writeItemToStorage] = FavesProvider();

    if (loading) {
        return (
            <Text>Loading</Text>
        )
    } else if (error) {
        return (
            <Text>Error</Text>
        )
    } else {
        console.log({ navigation });
        console.log(faves);
        return (
            <View>
                <SectionList
                    sections={data.allSessions.reduce(sortStartTime, [])}
                    keyExtractor={data => data.id}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <View style={styles.locationContainer}>
                                <Text style={styles.location}>{item.location}</Text>
                                <TouchableOpacity onPress={() => writeItemToStorage(item.id)}>
                                    {faves && faves.includes(item.id) ? (
                                        <Icon name="ios-heart"
                                            size={20} />
                                    ) : <Icon name="ios-heart-empty"
                                        size={20} />
                                    }
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


export default withNavigation(Schedule);