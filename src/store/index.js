import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import weather from "./slice/weather";

const reducer = combineReducers({
    weather,
})

const store = configureStore({
    reducer,
})

export default store;