import React from "react";
import "./Imagebox.css";

const Imagebox = props => (
	<div onClick={() => props.doClick(props.id)} className="imageBox">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default Imagebox;