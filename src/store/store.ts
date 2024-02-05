import { configureStore, combineReducers } from '@reduxjs/toolkit';
/* import createSagaMiddleware from 'redux-saga';
import { watcherSagas } from './sagas'; */
import { snakeReducer } from './reducers/snakeReducer';

const rootReducer = combineReducers({
  snakeReducer,
});

/* const sagaMiddleware = createSagaMiddleware();
 */
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

/* sagaMiddleware.run(watcherSagas); */

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
