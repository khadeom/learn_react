import logo from './logo.svg';
import './App.css';
import Login, { Demo } from './day_one/Login';
import ClassDemo from './day_one/ClassDemo';
import ComponentDemo from './day_one/ComponentDemo';



function App() {
  var con = {id:23, sal:3500, name:'om'}
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Login location='India'></Login>
      <ClassDemo></ClassDemo>
      <Demo></Demo>
      <ComponentDemo emp={con}></ComponentDemo>
    </div>
  );
}

export default App;
