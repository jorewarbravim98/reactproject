import React from "react";
import Cards from './Cards';
import Sdata from './Sdata';
const App = () => (
  <>
    <h1 >LIST OF TOP NETFLIKS WEB SERIES 2021</h1>
    {Sdata.map((val, index) => {
      return (
        <Cards
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          Sname={val.Sname}
          link={val.link} 
          />
             );
                               }
              )
    },
  </>);
export default App;
