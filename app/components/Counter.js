import React, { PropTypes, Component } from 'react'

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    incrementAsyncCancel: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired,
  }

  incrementAsync = () => {
    this.props.incrementAsync()
  }

  render() {
    const {
      increment,
      incrementAsyncCancel,
      decrement,
      counter,
    } = this.props
    return (
      <div>
        {`Clicked: ${counter.value} times`}
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
        {counter.isCounting &&
          <button onClick={incrementAsyncCancel}>Cancel increment async</button>
        }
      </div>
    )
  }
}
