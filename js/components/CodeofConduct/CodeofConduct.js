import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CodeofConduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;

        return (
            <View>
                <View>
                    <Text>{data.title}</Text>
                </View>
                <Text>{data.description}</Text>
            </View>
        );
    }
}

export default CodeofConduct;