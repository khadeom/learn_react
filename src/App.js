import logo from './logo.svg';
import './App.css';
import ClassCom from './day2/ClassComp' 
import FuncComp2 from './day2/FuncComp' 
import Products from './day2/Products';
import FormDemo from './day2/FormDemo';
import ControledForm from './day3/ControledForm';
import UnControledForm from './day3/UnControledForm';

function App() {
  var con = {id:23, sal:3500, name:'om'}
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <ClassCom></ClassCom> */}
      {/* <FuncComp2></FuncComp2>
      <Products></Products>
      <FormDemo></FormDemo> */}
      <ControledForm></ControledForm>
      {/* <UnControledForm></UnControledForm> */}
    </div>
  );
}

export default App;
