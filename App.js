import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Provider, connect } from 'react-redux'

import store, { sendMessage } from './store/'

const appSuccessMessage = {
  0: 'fail',
  1: 'success',
  '-1': 'loading'
}

const App = ({ sendMessage, success }) => (
  <View style={styles.container}>
    <Text>{appSuccessMessage[success]}</Text>
    <Button onPress={e => sendMessage('vol+')} title='Vol+' />
    <Button onPress={e => sendMessage('vol-')} title='Vol-' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const ConnApp = connect(state => state, { sendMessage })(App)

export default p => <Provider store={store}><ConnApp /></Provider>
