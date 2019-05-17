import React from 'react'
import { Image } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import { useScreens } from 'react-native-screens'

import Icon from 'react-native-vector-icons/Ionicons'

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Attraction from '../screens/Attraction'
import Explore from '../screens/Explore'
import Map from '../screens/Map'
import Area from '../screens/Area'

const ExploreStackNavigator = createStackNavigator({
  Explore,
  Area,
  Attraction
})

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: 'MAP',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-map' color={tintColor} size={24} />
        )
      }
    },
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-eye' color={tintColor} size={24} />
        )
      }
    }
  },
  {
    navigationOptions: () => {
      return {
        header: null
      }
    }
  }
)

const AppStackNavigator = createStackNavigator({
  Welcome,
  Login,
  AppBottomTabNavigator
})

useScreens()

export default createAppContainer(AppStackNavigator)
