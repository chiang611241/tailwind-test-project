import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import weather from "./slice/weather";
import weatherSetting from "./slice/weatherSetting";


const reducer = combineReducers({
    weather,
    weatherSetting,
})

const store = configureStore({
    reducer,
})

export default store;