import React from 'react';
//import './App.css';
import {add,sub,mul,div} from './Calc'
function App() {
  return (
    <div >
  <ul>
    <li>Sum is {add(40,4)}</li>
    <li>Sub is {sub(40,4)}</li>
    <li>Mul is {mul(40,4)}</li>
    <li>Div is {div(40,4)}</li>
  </ul>
    </div>
  );
}

export default App;
