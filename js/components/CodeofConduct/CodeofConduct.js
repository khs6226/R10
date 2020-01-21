import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CodeofConduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const title = data.title;
        const desc = data.description;
        console.log(title);

        return (
            <View>
            <View>
                <Text>{title}</Text>
            </View>
            <View>
                <Text>{desc}</Text>
            </View>
            </View>
        )
    }
}

export default CodeofConduct;