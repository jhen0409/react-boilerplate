import {
  INCREMENT,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_CANCEL,
  INCREMENT_ASYNC_END,
  DECREMENT,
} from '../actions/counter'

const initialState = {
  value: 0,
  isCounting: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      }
    case INCREMENT_ASYNC:
      return {
        ...state,
        isCounting: true,
      }
    case INCREMENT_ASYNC_CANCEL:
      return {
        ...state,
        isCounting: false,
      }
    case INCREMENT_ASYNC_END:
      return {
        ...state,
        value: state.value + 1,
        isCounting: false,
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return state
  }
}
