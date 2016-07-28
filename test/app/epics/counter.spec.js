import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import { delay } from '../../util'
import {
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_CANCEL,
  INCREMENT_ASYNC_END,
} from '../../../app/actions/counter'
import {
  incrementAsyncEpic,
} from '../../../app/epics/counter'

const epic = createEpicMiddleware(incrementAsyncEpic)
const mockStore = configureMockStore([epic])

describe('counter epics', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epic.replaceEpic(incrementAsyncEpic)
  })

  it('incrementAsync', async () => {
    const time = 1000
    store.dispatch({ type: INCREMENT_ASYNC, delay: time })
    await delay(time)
    expect(store.getActions()).toEqual([
      { type: INCREMENT_ASYNC, delay: time },
      { type: INCREMENT_ASYNC_END },
    ])
  })

  it('cancel incrementAsync', async () => {
    const time = 1000
    store.dispatch({ type: INCREMENT_ASYNC, delay: time })
    store.dispatch({ type: INCREMENT_ASYNC_CANCEL })
    await delay(time)
    expect(store.getActions()).toEqual([
      { type: INCREMENT_ASYNC, delay: time },
      { type: INCREMENT_ASYNC_CANCEL },
    ])
  })
})
