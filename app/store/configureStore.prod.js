import { applyMiddleware, createStore, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import rootEpic from '../epics'
import rootReducer from '../reducers'

const router = routerMiddleware(browserHistory)
const epic = createEpicMiddleware(rootEpic)
const enhancer = compose(
  applyMiddleware(router, epic)
)

export default initialState =>
  createStore(rootReducer, initialState, enhancer)
