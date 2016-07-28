import expect from 'expect'
import counter from '../../../app/reducers/counter'
import {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_CANCEL,
  INCREMENT_ASYNC_END,
  DECREMENT,
} from '../../../app/actions/counter'

const getState = ext => ({ value: 0, isCounting: false, ...ext })

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {})).toEqual(getState())
  })

  it('should handle INCREMENT', () => {
    expect(
      counter(getState({ value: 1 }), { type: INCREMENT })
    ).toEqual(getState({ value: 2 }))
  })

  it('should handle INCREMENT_ASYNC', () => {
    expect(
      counter(getState({ value: 1 }), { type: INCREMENT_ASYNC })
    ).toEqual(getState({ value: 1, isCounting: true }))
  })

  it('should handle INCREMENT_ASYNC_CANCEL', () => {
    expect(
      counter(getState({ value: 1 }), { type: INCREMENT_ASYNC_CANCEL })
    ).toEqual(getState({ value: 1, isCounting: false }))
  })

  it('should handle INCREMENT_ASYNC_END', () => {
    expect(
      counter(getState({ value: 1 }), { type: INCREMENT_ASYNC_END })
    ).toEqual(getState({ value: 2, isCounting: false }))
  })

  it('should handle DECREMENT', () => {
    expect(
      counter(getState({ value: 1 }), { type: DECREMENT })
    ).toEqual(getState({ value: 0 }))
  })

  it('should handle unknown action type', () => {
    expect(
      counter(getState({ value: 1 }), { type: 'unknown' })
    ).toEqual(getState({ value: 1 }))
  })
})
