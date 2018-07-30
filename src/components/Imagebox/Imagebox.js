import React from "react";
import "./Imagebox.css";

const Imagebox = props => (
<div className="wrap">
    <div 
        className="images"
        value={props.id} 
        onClick={() => props.handleClick(props.id)}
    />
    <div className="image">
        <img alt={props.id} src={props.image} />
    </div>
</div>
);

export default Imagebox;