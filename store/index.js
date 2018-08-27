import { createStore, applyMiddleware } from 'redux'
import websocket from 'redux-middleware-websocket'

import rootReducer from './reducers'
import * as actions from './actions'

const store = createStore(rootReducer, applyMiddleware(websocket))

export default store
export {store, actions}
