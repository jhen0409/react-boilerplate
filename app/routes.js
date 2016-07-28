import React from 'react'
import { Route } from 'react-router'

import Home from './containers/Home'
import CounterPage from './containers/CounterPage'

export default (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/counter" component={CounterPage} />
  </Route>
)
