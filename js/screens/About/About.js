import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CodeofConduct from '../../components/CodeofConduct';

const About = ( {data} ) => {
    return (
        <ScrollView>
            <View>
            {data.allConducts.map(data => {
                <CodeofConduct key = {data.id} data = {data} />
            })}
            </View>
        </ScrollView>
    )
}

export default About;