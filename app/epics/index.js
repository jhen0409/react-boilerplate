import { combineEpics } from 'redux-observable'
import {
  incrementAsyncEpic,
} from './counter'

export default combineEpics(
  incrementAsyncEpic
)
