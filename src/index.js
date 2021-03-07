/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './App.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
const name="Bravim";
//const currDate=new Date().toLocaleDateString();
//const currTime=new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
const link1="https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14"
const heading={
    color: "brown",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow:"0px 2px 4px #ffe9c5",
    margin: "70px"
}
ReactDOM.render(
  <>
  <h1 style={heading}>Hello, My name is {name}</h1>
  <div className="img_div">
  <a href={link1} target="_youtube">
  <img src={img1} alt="nature"/>
  <img src={img2} alt="nature"/>
  <img src={img3} alt="nature"/>
  </a>
  </div>
  </>,
  
);
//reportWebVitals();
*/
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import Greet from './Greet';
ReactDOM.render(<Greet/>,document.getElementById("root"));
