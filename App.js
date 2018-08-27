import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Root from './src/Root'

export default p => (
  <Provider store={store}>
    <Root />
  </Provider>
)
