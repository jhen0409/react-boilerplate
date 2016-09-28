import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

const CounterPage = props =>
  <div>
    <Counter {...props} />
    <button onClick={props.goBack}>Go back</button>
  </div>

CounterPage.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    counter: state.counter,
  }),
  dispatch =>
    bindActionCreators(
      { ...CounterActions, goBack },
      dispatch
    )
)(CounterPage)
