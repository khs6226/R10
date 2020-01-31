import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import AboutScreen from '../screens/About';
import ScheduleScreen from '../screens/Schedule/Schedule';
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
      Schedule: ScheduleScreen
    },
    // AND THIS!
    {
      defaultNavigationOptions: ({ navigation }) => ({
        ...sharedNavigationOptions(navigation)
      })
    }
  );

const TabBarNavigator = createBottomTabNavigator(
    {
        About : AboutStack,
        Schedule : ScheduleStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                if (routeName === 'About') {
                  iconName = 'ios-information-circle';
                } else if(routeName === 'Schedule') {
                  iconName = 'ios-calendar';
                }

            return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),

        tabBarOptions: {
            activeTintColor: colors.white,
            inactiveTintColor: colors.mediumGrey,

            labelStyle: {
                fontFamily: fonts.light,
                fontSize: 10,
            },

            style: {
                backgroundColor: colors.black
            }
        }
    }
);

export default TabBarNavigator;