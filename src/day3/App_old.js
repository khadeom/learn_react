import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProductComp, ProductDetails } from './day3/ProductComp';

const HomePage = () => {
  return <h1>Home Page</h1>;
}

const AboutUs = () => {
  return <h1>About Us</h1>;
}

const ContactUs = () => {
  return <h1>About Us</h1>;
}

const Solutions = () => {
  return <h1>Solutions</h1>;
}

function App() {
  return (

    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/product' element={<ProductComp/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
