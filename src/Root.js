import { createDrawerNavigator } from 'react-navigation'
import { StyleSheet } from 'react-native'

import HomeView from './HomeView'
import SettingsView from './SettingsView'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center'
  }
})

const App = createDrawerNavigator({
  Home: {
    screen: HomeView
  },
  Settings: {
    screen: SettingsView
  }
})

const Root = p => (
  <View style={styles.view}>
    <App />
  </View>
)

export default Root
