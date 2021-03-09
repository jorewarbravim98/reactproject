import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards'

ReactDOM.render(
  <>
    <Cards
      imgsrc="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565355376-61wfjy7qkAL.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A"
      title="A original Netflix Series"
      Sname="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Cards
      imgsrc="https://i1.wp.com/udou.ph/wp-content/uploads/2020/03/extracurricular.jpg?resize=400%2C600&ssl=1"
      title="A original Netflix Series"
      Sname="Extracurricular"
      link="https://www.netflix.com/in/title/80990668"
    />
    <Cards
      imgsrc="https://wallpaperaccess.com/full/2114490.jpg"
      title="A original Netflix Series"
      Sname="YOU"
      link="https://www.netflix.com/in/title/80211991"
    />
  </>,
  document.getElementById("root")
);
