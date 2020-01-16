import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CodeofConduct from '../../components/CodeofConduct';

const About = ( {data} ) => {
    return (
        <ScrollView>
            {data.allConducts.map(data => {
                <CodeofConduct key = {data.id} data = {data} />
            })}
        </ScrollView>
    )
}

export default About;