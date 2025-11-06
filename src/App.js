import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import NavBar from './day4/NavBar';
import './App.css';


function App() {
  // keep an internal state so UI updates when login status changes
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
