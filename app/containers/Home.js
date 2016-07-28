import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const toCounter = () => push('/counter')

const Home = props =>
  <div>
    <button onClick={props.toCounter}>Go to counter</button>
  </div>

Home.propTypes = {
  toCounter: PropTypes.func.isRequired,
}

export default connect(
  state => state,
  dispatch =>
    bindActionCreators(
      { toCounter },
      dispatch
    )
)(Home)
