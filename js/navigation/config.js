import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-navigation-stack";
import LinearGradient from "react-native-linear-gradient";
import { colors, fonts } from '../config/styles';

const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
      <LinearGradient
        colors={[colors.red, colors.purple]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={[StyleSheet.absoluteFill, { width: '100%' }]}
      />
      <Header {...props} />
    </View>
);

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
      backgroundColor: "transparent",
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontFamily: fonts.light,
        fontSize: 25,
        marginBottom: 20
    }
});