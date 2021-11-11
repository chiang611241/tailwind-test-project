import React from 'react';
import clsx from 'clsx';
import { useDispatch } from "react-redux";
import { setLocation } from './store/slice/weatherSetting';

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
          <option value="">-</option>
          <option value="臺北市">臺北市</option>
          <option value="新北市">新北市</option>
          <option value="基隆市">基隆市</option>
          <option value="桃園市">桃園市</option>
          <option value="新竹市">新竹市</option>
          <option value="新竹縣">新竹縣</option>
          <option value="苗栗縣">苗栗縣</option>
          <option value="臺中市">臺中市</option>
          <option value="彰化縣">彰化縣</option>
          <option value="南投縣">南投縣</option>
          <option value="雲林縣">雲林縣</option>
          <option value="嘉義縣">嘉義縣</option>
          <option value="嘉義市">嘉義市</option>
          <option value="臺南市">臺南市</option>
          <option value="高雄市">高雄市</option>
          <option value="屏東縣">屏東縣</option>
          <option value="宜蘭縣">宜蘭縣</option>
          <option value="花蓮縣">花蓮縣</option>
          <option value="臺東縣">臺東縣</option>
          <option value="澎湖縣">澎湖縣</option>
          <option value="金門縣">金門縣</option>
          <option value="連江縣">連江縣</option>
        </select>
      </div>
    </main>
  );
}

export default App;
