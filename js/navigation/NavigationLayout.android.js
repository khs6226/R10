import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import FavesScreen from '../screens/Faves'
import { sharedNavigationOptions } from "./config";
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '../config/styles';

const AboutStack = createStackNavigator(
    {
      About: AboutScreen
    },
    // AND THIS!
    {
      defaultNavigationOptions: ({ navigation }) => ({
        ...sharedNavigationOptions(navigation)
      })
    }
  );

const ScheduleStack = createStackNavigator(
    {
      Schedule: ScheduleScreen,
      Session: SessionScreen
    },
    // AND THIS!
    {
      defaultNavigationOptions: ({ navigation }) => ({
        ...sharedNavigationOptions(navigation)
      })
    }
  );

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
)

const DrawerNavigator = createDrawerNavigator(
    {
      Schedule : ScheduleStack,
      Faves : FavesStack,
      About : AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            drawerIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                if (routeName === 'Schedule') {
                  iconName = 'md-calendar';
                } else if(routeName === 'About') {
                  iconName = 'md-information-circle';
                } else if(routeName === 'Faves') {
                  iconName = 'md-heart';
                }

            return <Icon name={iconName} size={25} color={tintColor} />
            },
        }),
        
        contentOptions: {
            activeTintColor: colors.purple,
            inactiveTintColor: colors.mediumGrey,

            labelStyle: {
                fontFamily: fonts.light,
                fontSize: 20,
                fontWeight: "bold",
                
            },
        }
    }
);

export default DrawerNavigator;