import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import Sdata from './Sdata';
import "./index.css";
function ncard(val){return (<Cards
  imgsrc={val.imgsrc}
  title={val.title}
  Sname={val.Sname}
  link={val.link}
/>);}
ReactDOM.render(
  <>
    <h1 >LIST OF TOP NETFLIKS WEB SERIES 2021</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
