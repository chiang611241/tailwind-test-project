import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const GetWeather = createAsyncThunk('getWeather', async ({ location }) => {
  const weather = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.REACT_APP_WEATHER_CODE}`
  const response = await axios.get(
    `${weather}&locationName=${location}`
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
    [GetWeather.rejected]: (state) => {
      state.weather = [];
    },
  },
});

export default weatherSlice.reducer;
export const getWeather = (state) => state.weather;
