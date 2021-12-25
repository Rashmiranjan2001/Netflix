import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <React.Fragment>
    <h1 className="heading_style">List of top 5 Netflix Series in 2021</h1>
    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        ></Card>
      );
    })}
  </React.Fragment>,
  document.getElementById("root")
);
