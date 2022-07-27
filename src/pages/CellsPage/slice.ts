import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Api } from '@src/store/api';
import { RootReducers } from '@src/store/store';

import { ALL_CELLS } from './constants';
import { Cell, CellsResponseData } from './types';

export interface InitialState {
  cellsInfo: CellsResponseData | null;
  status: 'loading' | 'rejected' | 'received' | 'idle';
  error?: string;
  checkedCells: Cell[]
}

export const getCellsInfo = createAsyncThunk<
  CellsResponseData,
  string,
  {
    extra: Api,
  }
>(
  '@@cellsInfo/load-data',
  async (uid, {
    rejectWithValue,
    extra,
  }) => {
    try {
      const { baseUrl, cellInfo } = extra;
      const url = `${baseUrl}${cellInfo(uid)}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Status: ${res.status}`);
      }

      const { data } = await res.json();

      return data;
    } catch (err: any) {
      return rejectWithValue(`Error: ${err.message}`);
    }
  },
);

const initialState: InitialState = {
  cellsInfo: null,
  error: undefined,
  status: 'idle',
  checkedCells: [],
};

const cellsInfoSlice = createSlice({
  name: '@@cellsInfo',
  initialState,
  reducers: {
    setCheckedCells: (state, action: PayloadAction<Cell[]>) => {
      state.checkedCells = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCellsInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCellsInfo.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      })
      .addCase(getCellsInfo.fulfilled, (state, action) => {
        state.status = 'received';
        state.cellsInfo = action.payload;
      });
  },
});

export const cellsInfoReducer = cellsInfoSlice.reducer;

export const { setCheckedCells } = cellsInfoSlice.actions;

export const selectCellsTypes = ({
  cells: {
    cellsInfo,
  },
}: RootReducers) => cellsInfo?.cell_types;

export const selectCellsFetchInfo = ({
  cells: {
    error,
    status,
  },
}: RootReducers) => ({ error, status });

export const selectCheckedCells = ({
  cells: {
    checkedCells,
  },
}: RootReducers) => checkedCells;
