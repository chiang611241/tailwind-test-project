import React from 'react';
import clsx from 'clsx';
import { useDispatch } from "react-redux";
import { setLocation } from './store/slice/weatherSetting';
import { LocationList } from './locationList';

import Weather from './weather.jsx';

function App() {
  const dispatch = useDispatch();
  function myNewFunction(event) {
    dispatch(setLocation({ name: event.target.value }));
  }
  return (
    <main
      className={clsx(
        'grid grid-rows-2 grid-cols-3 grid-flow-row',
        'h-screen w-screen text-xl'
      )}
    >
      <div className="row-span-1 col-span-3 lg:row-span-2 lg:col-span-2">
        <Weather />
      </div>
      <div className="row-span-1 col-span-3 lg:row-span-2 lg:col-span-1 bg-green-200">
        <span>地區</span>
        <select name="city" id="city" className="w-40" onChange={(event) => myNewFunction(event)}>
          {LocationList.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </main>
  );
}

export default App;
