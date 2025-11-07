import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import NavBar from './day4/NavBar';
import './App.css';
import Employees from './day4/Employees';
import { StateLifting } from './day5/StateLifting';
import {Display} from './day5/Display'
import {MyContext} from './day5/Context'
import { Parent1 } from './day5/Parent1';

function App() {
  // keep an internal state so UI updates when login status changes
  const [text, setText] = useState("")
  const commonData = {id: 123, name: "om"}

  return (
    <div className="App">
      <MyContext.Provider value={commonData}>
        {/* <Parent1></Parent1> */}
        <NavBar></NavBar>
      </MyContext.Provider>

      {/* <StateLifting setText={ setText } /> */}
      {/* <Display text={text} /> */}
    </div>
  );
}

export default App;
