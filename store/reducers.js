import produce from 'immer'
import {
  WEBSOCKET_SEND,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSED
} from 'redux-middleware-websocket'

const initialState = {
  status: '',
  connected: false
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    if (action.type === WEBSOCKET_OPEN) draft.connected = true
    if (action.type === WEBSOCKET_CLOSED) draft.connected = false
    if (action.type === WEBSOCKET_SEND) draft.status = 'loading'
    if (action.type === WEBSOCKET_MESSAGE) draft.status = action.payload.data
  })

export default reducer
