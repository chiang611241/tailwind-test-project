import { createSlice } from '@reduxjs/toolkit';

export const weatherSettingSlice = createSlice({
  name: 'weatherSetting',
  initialState: {
    location: '',
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload.name;
    },
  },
});

export const { setLocation } = weatherSettingSlice.actions;
export const setWeatherLocation = (state) => state.weatherSetting;
export default weatherSettingSlice.reducer;
