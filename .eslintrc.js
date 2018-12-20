module.exports = {
  env: {
    'react-native/react-native': true
  },
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react'],
  plugins: ['react', 'react-native'],
  rules: {
    'react/prop-types': 0
  }
}
