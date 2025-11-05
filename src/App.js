import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProductComp, ProductDetails } from './day3/ProductComp';
import FormDemo from './day2/FormDemo';
import { RegisterComp } from './day3/RegisterComp';
import LoginComp from './day3/LoginComp';

const HomePage = () => {
  return <h1>Home Page</h1>;
}

const AboutUs = () => {
  return <h1>About Us</h1>;
}

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  console.log(`isLoggedIn =${isLoggedIn} ${typeof isLoggedIn }`)

  const handleLogout = ()=> {
    console.log("Updated the login")
    localStorage.setItem('isLoggedIn', '')
  }

  return (
    <div className="App">
      <nav>
        {isLoggedIn ? (
          <>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About Us</Link> |{" "}
          <Link to="/employes">Employee</Link> |{" "}
          <Link to="/product">Products</Link> |{" "}
          <Link to="/logout">Logout</Link>
          <Link to="/">Home</Link> |{" "}
          </>
        ) : (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}{" "}
        


      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/employes' element={<FormDemo/>}></Route>
        <Route path='/product' element={<ProductComp/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/login' element={<LoginComp/>}></Route>
        <Route path='/logout' element={<LoginComp/>}></Route>
        <Route path='/register' element={<RegisterComp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
