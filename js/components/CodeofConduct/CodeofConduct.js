import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

class CodeofConduct extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hide : false,
            signs: new Animated.Value(0)
        }
    }

    onPress = () => {
        Animated.timing(this.state.signs, {
            toValue: 1,
            duration: 800
        }).start(event => {
            if(event.finished) {
                this.setState({
                    signs: new Animated.Value(0)
                });
            }
        });
        this.setState({
            hide : !this.state.hide
        })
        
    }

    render() {
        const data = this.props.data;

        const interpolatedRotation = this.state.signs.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        const spin = {
            transform: [{
                rotate: interpolatedRotation
            }]
        };
        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <View style = {styles.container}>
                        <Animated.Text style = {[styles.sign, spin]}>{this.state.hide ? "-" : "+"}</Animated.Text> 
                        <Text style = {styles.title}>{data.title}</Text>
                    </View>
                    <Text style = {styles.conduct}>{this.state.hide ? data.description : null}</Text>

                </TouchableOpacity>
            </View>
        )
    }
}

export default CodeofConduct;