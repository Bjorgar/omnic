import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { deviceInfoReducer } from '@src/components/App/slice';
import { cellsInfoReducer } from '@src/pages/CellsPage/slice';

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

export type AppDispatch = typeof store.dispatch
export const useTypeDispatch: () => AppDispatch = useDispatch;
