import expect from 'expect'
import * as actions from '../../../app/actions/counter'

const {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_CANCEL,
  DECREMENT,
} = actions

describe('counter actions', () => {
  it('increment should create INCREMENT action', () => {
    expect(actions.increment()).toEqual({ type: INCREMENT })
  })

  it('incrementAsync should create INCREMENT_ASYNC action', () => {
    expect(actions.incrementAsync()).toEqual({ type: INCREMENT_ASYNC, delay: 2000 })
    expect(actions.incrementAsync(1000)).toEqual({ type: INCREMENT_ASYNC, delay: 1000 })
  })

  it('incrementAsyncCancel should create INCREMENT_ASYNC_CANCEL action', () => {
    expect(actions.incrementAsyncCancel()).toEqual({ type: INCREMENT_ASYNC_CANCEL })
  })

  it('decrement should create DECREMENT action', () => {
    expect(actions.decrement()).toEqual({ type: DECREMENT })
  })
})
