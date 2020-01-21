import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class CodeofConduct extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hide : false
        }
    }

    onPress = () => {
        this.setState({
            hide : !this.state.hide
        })
        
    }

    render() {
        const data = this.props.data;

        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this.onPress}>
                        <Text style = {styles.conduct}>{this.state.hide ? "-" : "+"} {data.title}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>{this.state.hide ? data.description : null}</Text>
                </View>
            </View>
        )
    }
}

export default CodeofConduct;