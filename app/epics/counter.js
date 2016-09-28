import { timer } from 'rxjs/observable/timer'
import {
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_CANCEL,
  INCREMENT_ASYNC_END,
} from '../actions/counter'

export const incrementAsyncEpic = action$ =>
  action$.ofType(INCREMENT_ASYNC)
    .mergeMap(action =>
      timer(action.delay)
        .takeUntil(action$.ofType(INCREMENT_ASYNC_CANCEL))
    )
    .mapTo({ type: INCREMENT_ASYNC_END })
