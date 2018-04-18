import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, SwitchNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";

import Login from '../screens/Login';
import Rooms from '../screens/Rooms';
import Booking from '../screens/Booking';
import BookingStart from '../screens/BookScreens/BookingStart';
import BookingDetails from '../screens/BookScreens/BookingDetails';
import BookingOverview from '../screens/BookScreens/BookingOverview';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


export const BookingNavigator = StackNavigator({
  
    BookingStart: {
    screen: BookingStart,
    navigationOptions: {
      title: 'Välj tid och plats'
    },
  },
  BookingDetails: {
    screen: BookingDetails,
    navigationOptions: {
      title: 'Bokningsdetaljer'
    }
  },
  BookingOverview: {
    screen: BookingOverview,
    navigationOptions: {
      title: 'Bokat!'
    }
  }}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5A6978',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
      },
      headerTintColor: '#FFFFFF',
    },
  
  
});

export const SignedOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null, //hides header
    }
  }
});

export const SignedIn = TabNavigator ({
  Rooms: {
    screen: Rooms,
    navigationOptions: {
      tabBarLabel: 'Sök ledigt'
  }},
    Booking: {
      screen: Booking,
      navigationOptions: {
        tabBarLabel: 'Boka rum'}},
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Dina bokningar'}
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: 'Inställningar'}
      }
    },
    {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Rooms') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Booking') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#3DCC90', 
      inactiveTintColor: '#FFFFFF',
      style: {
      backgroundColor: '#969FAA',
      },
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
   
  }
);

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};