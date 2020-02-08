import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import { Header } from "react-navigation-stack";
import LinearGradient from "react-native-linear-gradient";
import { colors, fonts } from '../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';

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

const Drawer = ({navigation}) => {
   const {routeName} = navigation.state;
   return routeName !== "Session"
    ? (
        <Icon name="md-menu" size={25} color={colors.white} onPress={navigation.openDrawer}/>
    ) : (
        <Icon name="md-arrow-round-back" size={25} color={colors.white} onPress={() => navigation.goBack()}/>
    );
  }

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerLeft: () => Platform.select({
      android: <Drawer navigation={navigation} />
    }),
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