import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cellsInfoReducer } from '@src/pages/CellsPage/slice';
import { deviceInfoReducer } from '@src/pages/MainPage/slice';

import { api } from './api';

const rootReducers = combineReducers({
  device: deviceInfoReducer,
  cells: cellsInfoReducer,
});

export type RootReducers = ReturnType<typeof rootReducers>;

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
