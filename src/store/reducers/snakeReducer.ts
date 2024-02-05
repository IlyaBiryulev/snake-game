import { createReducer } from '@reduxjs/toolkit/react';
import { MOVE_RIGHT } from '../actions';

interface ISnakePosition {
  x: number;
  y: number;
}

export interface snakeState {
  snake: ISnakePosition[] | [];
}

const initialState: snakeState = {
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
};

export const snakeReducer = createReducer(initialState, (builder) => {
  builder.addCase(MOVE_RIGHT, (state, action) => {
    return {
      ...state,
      data: action.payload,
    };
  });
});

export default snakeReducer;
