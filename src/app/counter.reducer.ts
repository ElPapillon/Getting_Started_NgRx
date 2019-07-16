import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 1000;

export const counterReducer = createReducer(initialState,
  on(increment, state => state + 2),
  on(decrement, state => state - 3),
  on(reset, state => 0),
);
