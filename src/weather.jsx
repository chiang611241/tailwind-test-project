import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetWeather, getWeather } from './store/slice/weather';
import { setWeatherLocation } from './store/slice/weatherSetting'

const Weather = () => {
  const dispatch = useDispatch();
  const weatherState = useSelector(getWeather);
  const weatherLocationState = useSelector(setWeatherLocation);
  const [currentWeather, setCurrentWeather] = useState(weatherState);

  const onClick = () => {
    dispatch(GetWeather({ location: weatherLocationState.location }));
  }
  useEffect(() => {
    setCurrentWeather(weatherState);
  }, [weatherState]);

  return (
    <>
      <p>{JSON.stringify(currentWeather?.weather?.records)}</p>
      <button
        className="bg-blue-300 text-white rounded-md p-2"
        onClick={onClick}
      >
        click me
      </button>
    </>
  );
};

export default Weather;
