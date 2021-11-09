import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const GetWeather = createAsyncThunk('getWeather', async () => {
  const response = await axios.get(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.REACT_APP_WEATHER_CODE}`
  );
  return response.data;
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  extraReducers: {
    [GetWeather.fulfilled]: (state, action) => {
      state.weather = action.payload;
    },
    [GetWeather.rejected]: (state, action) => {
      state.weather = [];
    },
  },
});

export default weatherSlice.reducer;
export const getWeather = (state) => state.weather;
