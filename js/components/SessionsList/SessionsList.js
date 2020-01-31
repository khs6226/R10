import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, SectionList } from 'react-native';
import { reduceSession } from './ReduceSessions';
import styles from './styles';

class SessionsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        console.log(data);

        return (
            <View>
                <SectionList
                    sections={data.reduce(reduceSession, [])}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )} />
            </View>
        )
    }
}

export default SessionsList;