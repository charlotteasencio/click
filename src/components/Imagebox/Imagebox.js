import React from "react";
import "./Imagebox.css";

const Imagebox = props => (
<div className="wrap">
    <div className="card">
        <img alt={props.id} src={props.image} />
    </div>
</div>
);

export default Imagebox;