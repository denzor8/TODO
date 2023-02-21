import React, { useState } from 'react';
import List from './components/List/List'
import SideBar from './components/SideBar/SideBar'
import DB from './assets/db.json'

function App() {

  return (
    <div className='todo'>
      <div className="todo__sidebar">
        <SideBar  colors={DB.colors} List={List} />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}

export default App;
