import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProductComp, ProductDetails } from './day3/ProductComp';
import FormDemo from './day2/FormDemo';
import { RegisterComp } from './day3/RegisterComp';
import LoginComp from './day3/LoginComp';
import LogoutComp from './day3/LogoutComp';

const HomePage = () => {
  return <h1>Home Page</h1>;
}

const AboutUs = () => {
  return <h1>About Us</h1>;
}

function App() {
  // keep an internal state so UI updates when login status changes
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('isLoggedIn')
  );

  useEffect(() => {
    console.log(`isLoggedIn =${isLoggedIn} ${typeof isLoggedIn }`);
  }, [isLoggedIn]);

  const handleLogout = () => {
    console.log('Updated the logout');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    console.log('Updated the login');
    // called after a successful login
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <nav>
        {isLoggedIn ? (
          <>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/about">About Us</Link> |{" "}
          <Link to="/employes">Employee</Link> |{" "}
          <Link to="/product">Products</Link> |{" "}
          <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
          </>
        )}{" "}
        


      </nav>

      <Routes>
        <Route path='/' element={<LoginComp onLogin={handleLogin} />}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/employes' element={<FormDemo/>}></Route>
        <Route path='/product' element={<ProductComp/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/login' element={<LoginComp onLogin={handleLogin} />}></Route>
  <Route path='/logout' element={<LogoutComp onLogout={handleLogout} />}></Route>
        <Route path='/register' element={<RegisterComp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
