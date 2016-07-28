/* eslint global-require: 0 */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const root = document.getElementById('root')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
)

if (module.hot) {
  module.hot.accept('./app', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      root
    )
  })
}
