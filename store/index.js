import SockJS from 'sockjs-client'
import { createStore } from 'redux'

const socket = new SockJS('http://192.168.0.2:8080/ws')

const initialState = {
  success: 1
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SEND') {
    socket.send(action.payload)
    return {
      success: -1
    }
  }
  if (action.type === 'RECV') {
    return {
      success: action.payload === 'success' ? 1 : 0
    }
  }
  return state
}

const sendMessage = payload => ({ type: 'SEND', payload })
const recvReply = payload => ({ type: 'RECV', payload })

socket.onmessage = function onmessage (msg) {
  store.dispatch(recvReply(msg.data))
}

const store = createStore(reducer)

export { sendMessage, recvReply }
export default store
