import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Platform, Linking } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './style';
import { colors } from '../../config/styles';
import { FavesContext } from '../../context/FavesContext/FavesContext';
import changeTimeFormat from '../../lib/changeTimeFormat';
import Icon from 'react-native-vector-icons/Ionicons';

const getSessionById = id => {
    const QUERY_SPEAKER = gql`
    query getSpeakerBySessionId($id: ID!) {
        Session(id: $id) {
            id
            title
            description
            location
            startTime
            speaker {
                id
                name
                bio
                image
                url
            }
        }
    }
    `

    const { data, loading, error } = useQuery(QUERY_SPEAKER, { variables: { id } });
    return {
        data: data ? data.Session : null,
        loading,
        error
    }
}

const Session = ({ navigation }) => {
    const { faves, writeItemToStorage } = useContext(FavesContext);
    const { data, loading, error } = getSessionById(navigation.getParam('id'));
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => { setModalOpen(!modalOpen) };
    const closeButton = Platform.select({
        ios: "ios-close",
        android: "md-close"
    });
    
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
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.location}>
                        {data.location}
                    </Text>
                    {faves && faves.includes(data.id) ? (
                        <Icon name="ios-heart" size={20} color={colors.red} />
                    ) : null}
                </View>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.time}>
                    {changeTimeFormat(data.startTime)}
                </Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
                {data.speaker ? <Text style={styles.presenter}>Presented by: </Text> : null}
                <TouchableOpacity onPress={() => toggleModal()}>
                    <View style={styles.speakerContainer}>
                        {data.speaker ? <Image style={styles.image} source={{ uri: data.speaker.image }} /> : null}
                        {data.speaker ? <Text style={styles.name}>{data.speaker.name}</Text> : null}
                    </View>
                </TouchableOpacity>
                <Modal animationType="slide" transparent={false} visible={modalOpen}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTopContainer}>
                            <Icon name={closeButton} size={50} style={styles.modalX} onPress={() => toggleModal()}/>
                            <Text style={styles.modalText}>About the Speaker</Text>
                        </View>
                        {data.speaker ?
                            <ScrollView style={styles.modalScrollView}>
                                <Image style={styles.modalImage} source={{ uri: data.speaker.image }} />
                                <Text style={styles.speakerName}>{data.speaker.name}</Text>
                                <Text style={styles.speakerBio}>{data.speaker.bio}</Text>
                                {data.speaker.url ?
                                <View style={styles.faveButtonContainer}>
                                    <TouchableOpacity style={styles.faveButton} onPress={() => Linking.openURL(data.speaker.url)}>
                                        <Text style={styles.faves}>
                                            Read More on Wikipedia
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                 : null}
                            </ScrollView>
                            : null
                        }
                    </View>
                </Modal>
                <View style={styles.faveButtonContainer}>
                    <TouchableOpacity style={styles.faveButton} onPress={() => writeItemToStorage(data.id)}>
                        <Text style={styles.faves}>
                            {faves && faves.includes(data.id) ? "Remove from Faves" : "Add to Faves"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Session;