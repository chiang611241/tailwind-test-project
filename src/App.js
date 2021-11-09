import React from 'react';
import clsx from 'clsx';
import Weather from './weather.jsx';

function App() {
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
    </main>
  );
}

export default App;
