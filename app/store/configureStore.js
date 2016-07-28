/* eslint global-require: 0 */

if (process.env.NODE_ENV !== 'development') {
  module.exports = require('./configureStore.prod').default
} else {
  module.exports = require('./configureStore.dev').default
}
