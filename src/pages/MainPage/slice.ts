import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '@src/store/api';
import { RootReducers } from '@src/store/store';

import { ResponseData } from './types';

export interface InitialState {
  deviceInfo: ResponseData | null;
  status: 'loading' | 'rejected' | 'received' | 'idle';
  error?: string;
}

export const getDeviceInfo = createAsyncThunk<
  ResponseData,
  string,
  {
    extra: Api,
  }
>(
  '@@deviceInfo/load-data',
  async (uid, {
    rejectWithValue,
    extra,
  }) => {
    try {
      const { baseUrl, deviceInfo } = extra;
      const url = `${baseUrl}${deviceInfo(uid)}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Fetch failure with status: ${res.status}`);
      }

      const { data } = await res.json();

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState: InitialState = {
  deviceInfo: null,
  error: undefined,
  status: 'idle',
};

const deviceInfoSlice = createSlice({
  name: '@@deviceInfo',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDeviceInfo.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(getDeviceInfo.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      })
      .addCase(getDeviceInfo.fulfilled, (state, action) => {
        state.status = 'received';
        state.deviceInfo = action.payload;
        state.error = undefined;
      });
  },
});

export const deviceInfoReducer = deviceInfoSlice.reducer;
export const selectDeviceId = ({
  device: {
    deviceInfo,
  },
}: RootReducers) => deviceInfo?.device;

export const selectDeviceFetchInfo = ({
  device: {
    error,
    status,
  },
}: RootReducers) => ({ error, status });
