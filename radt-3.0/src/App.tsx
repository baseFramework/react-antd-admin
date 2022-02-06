
import React, { FC } from 'react';
import { Button } from 'antd';
import './App.less';

function App(): JSX.Element | null {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-blue-50">
      <div className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
        <header>
          <h1 className="text-6xl text-white font-bold cursor-default">
            TS React Starter
          </h1>
        </header>
      </div>
      <div className='app-top'>
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}

export default App;
