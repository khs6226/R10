import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CodeofConduct = ({title, description}) => {
    return(
        <View>
            <View>
                <Text>{title}</Text>
            </View>
            <View>
                <Text>{description}</Text>
            </View>
        </View>
    )
}

export default CodeofConduct;