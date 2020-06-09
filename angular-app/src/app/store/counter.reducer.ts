import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

export const initialState = 0;

const reducer = createReducer(initialState,
  on(increment, state => state + 1)
);

export function counterReducer(state, action) {
  return reducer(state, action);
}
