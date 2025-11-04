import logo from './logo.svg';
import './App.css';
import ClassCom from './day_two/ClassComp' 
import FuncComp2 from './day_two/FuncComp' 
import Products from './day_two/Products';
import FormDemo from './day_two/FormDemo';

function App() {
  var con = {id:23, sal:3500, name:'om'}
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ClassCom></ClassCom>
      <FuncComp2></FuncComp2>
      <Products></Products>
      <FormDemo></FormDemo>
    </div>
  );
}

export default App;
