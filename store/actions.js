import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_SEND,
  WEBSOCKET_DISCONNECT
} from 'redux-middleware-websocket'

export const connectToServer = (ip, port = 8080) => ({
  type: WEBSOCKET_CONNECT,
  payload: {
    url: `ws://${ip}:${port}/fu`
  }
})

export const sendCommand = command => ({
  type: WEBSOCKET_SEND,
  payload: command
})

export const disconnectServer = () => ({
  type: WEBSOCKET_DISCONNECT
})
