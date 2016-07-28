import React from 'react'
import { Route } from 'react-router'

import Home from './containers/Home'
import Counter from './containers/Counter'

export default (
  <Route>
    <Route path="/" component={Home} />
    <Route path="/counter" component={Counter} />
  </Route>
)
