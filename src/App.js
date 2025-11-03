import logo from './logo.svg';
import './App.css';
import Login, { Demo } from './day_one/Login';
import ClassDemo from './day_one/ClassDemo';
import ComponentDemo from './day_one/ComponentDemo';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Login location='India'></Login>
      <ClassDemo></ClassDemo>
      <Demo></Demo>
      <ComponentDemo></ComponentDemo>
    </div>
  );
}

export default App;
