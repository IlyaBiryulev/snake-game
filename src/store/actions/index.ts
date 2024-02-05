import { createAction } from '@reduxjs/toolkit';

export const MOVE_RIGHT = createAction('MOVE_RIGHT');
export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_RIGHT';

export const moveRight = (data: string) => ({
  type: MOVE_RIGHT,
  payload: data,
});
