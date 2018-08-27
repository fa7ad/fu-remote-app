import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'

import RemoteView from './RemoteView'
import SettingsView from './SettingsView'

const view = (Component, icon) =>
  Object.assign(
    p => (
      <View
        style={{
          flex: 1,
          alignItems: 'center'
        }}
      >
        <StatusBar animated />
        <Component />
      </View>
    ),
    {
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon name={icon} color={focused ? '#ffffff' : '#3e2465'} size={24} />
        )
      }
    }
  )

export default createMaterialBottomTabNavigator(
  {
    Remote: {
      screen: view(RemoteView, 'md-keypad')
    },
    Settings: {
      screen: view(SettingsView, 'md-settings')
    }
  },
  {
    shifting: true,
    style: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' }
  }
)
