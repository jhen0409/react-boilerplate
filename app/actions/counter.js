export const INCREMENT = 'INCREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const INCREMENT_ASYNC_CANCEL = 'INCREMENT_ASYNC_CANCEL'
export const INCREMENT_ASYNC_END = 'INCREMENT_ASYNC_END'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT,
})

export const incrementAsync = (delay = 2000) => ({
  type: INCREMENT_ASYNC,
  delay,
})

export const incrementAsyncCancel = () => ({
  type: INCREMENT_ASYNC_CANCEL,
})

export const decrement = () => ({
  type: DECREMENT,
})
