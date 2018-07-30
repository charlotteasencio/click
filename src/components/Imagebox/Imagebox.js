import React from "react";
import "./Imagebox.css";
import App from "../../App.js";

const Imagebox = props => (
  <div className="wrap">
    <div className="image">
      <img alt={props.id} src={props.image}/>
    </div>
  </div>
);

export default Imagebox;
