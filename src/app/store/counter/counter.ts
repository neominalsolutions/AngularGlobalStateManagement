import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export interface CounterState {
  counter: number;
  isSucceded: boolean;
}

export const counterState: CounterState = {
  counter: 0,
  isSucceded: false,
};

export const counterReducer = createReducer(
  counterState,
  on(increment, (state: CounterState) => ({
    ...state,
    counter: state.counter + 1,
    isSucceded: true,
  })),
  on(decrement, (state: CounterState) => ({
    ...state,
    counter: state.counter - 1,
    isSucceded: false,
  }))
);
