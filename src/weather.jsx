import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetWeather, getWeather } from './store/slice/weather';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherState = useSelector(getWeather);
  const [currentWeather, setCurrentWeather] = useState(weatherState);

  const onClick = () => {
    dispatch(GetWeather());
  }

  useEffect(() => {
    setCurrentWeather(weatherState);
  }, [weatherState])

  return (
    <>
      <p>{JSON.stringify(currentWeather)}</p>
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
