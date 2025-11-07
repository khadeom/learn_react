import React, { useContext } from 'react';
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ProductComp, ProductDetails } from '../day3/ProductComp';
import FormDemo from '../day2/FormDemo';
import { RegisterComp } from '../day3/RegisterComp';
import LoginComp from '../day3/LoginComp';
import LogoutComp from '../day3/LogoutComp';
import { useNavigate } from 'react-router-dom'
import AboutUs from './AboutUs';
import Employees from './Employees';
import AddEmployee from './AddEmployee';
import UsersComp from './UsersComp';
import EditUser from './EditUser';
import AddUser from './AddUser';
import { MyContext } from '../day5/Context'
import withAuth from '../day5/Components/WithAuth';




const HomePage = () => {
  return <h1>Home Page</h1>;
}

const ProtectedAddUser = withAuth(AddUser)
const ProtectedHome = withAuth(HomePage)
const ProtectedEmployee =  withAuth(Employees)
const ProtectedUsersComp = withAuth(UsersComp)
const ProtectedAddEmployee = withAuth(AddEmployee)
const ProtectedAboutUs = withAuth(AboutUs)
const ProtectedEditUser = withAuth(EditUser)
const ProtectedProductComp  = withAuth(ProductComp)
const ProtectedProductDetails = withAuth(ProductDetails) 



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

  const  {id, name} = useContext(MyContext) 
  // const commonData = useContext(MyContext) 
  return (
    <div>

      {/* <h2>Id: {id} </h2> */}
      {/* <h2>Common data {commonData} </h2> */}
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
                <Link className="nav-link active" to="/employees">Employees</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/product">Products</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/users">Users</Link> 
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
        <Route path='/home' element={<ProtectedHome/>}></Route>
        <Route path='/about' element={<ProtectedAboutUs/>}></Route>
        <Route path='/employees' element={<ProtectedEmployee/>}></Route>
        <Route path='/product' element={<ProtectedProductComp/>}></Route>
        <Route path='/products/:id' element={<ProtectedProductDetails/>}></Route>
        <Route path='/login' element={<LoginComp onLogin={handleLogin} />}></Route>
        <Route path='/logout' element={<LogoutComp onLogout={handleLogout} />}></Route>
        <Route path='/register' element={<RegisterComp/>}></Route>
        <Route path='/addemp' element={<ProtectedAddEmployee/>}></Route>
        <Route path='/users' element={<ProtectedUsersComp/>}></Route>
        <Route path='/users/:id' element={<ProtectedEditUser/>}></Route>
        <Route path='/adduser' element={<ProtectedAddUser/>}></Route>
      </Routes>
    </div>
  )
}

export default NavBar