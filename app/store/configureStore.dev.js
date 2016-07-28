/* eslint global-require: 0 */

import { applyMiddleware, createStore, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootEpic from '../epics'
import rootReducer from '../reducers'

const router = routerMiddleware(browserHistory)
const epic = createEpicMiddleware(rootEpic)
const enhancer = compose(
  applyMiddleware(router, epic),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default initialState => {
  const store = createStore(rootReducer, initialState, enhancer)

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store)
  }

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )
    module.hot.accept('../epics', () =>
      epic.replaceEpic(rootEpic)
    )
  }
  return store
}
