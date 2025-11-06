import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ProductComp, ProductDetails } from '../day3/ProductComp';
import FormDemo from '../day2/FormDemo';
import { RegisterComp } from '../day3/RegisterComp';
import LoginComp from '../day3/LoginComp';
import LogoutComp from '../day3/LogoutComp';
import { useNavigate } from 'react-router-dom'
import AboutUs from './AboutUs';
const HomePage = () => {
  return <h1>Home Page</h1>;
}

const NavBar = () => {

  const navigate = useNavigate();
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
    navigate('/');
  };

  const handleLogin = () => {
    console.log('Updated the login');
    // called after a successful login
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">
          <ul className="navbar-nav">
        {isLoggedIn ? (
          <>
            <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/employes">Employee</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/product">Products</Link> 
            </li>
            <li className="nav-item">
                <button className="nav-link active" onClick={
                    handleLogout
                }>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/register">Register</Link>
            </li>
          </>
        )}
          </ul>
        </div>
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
  )
}

export default NavBar