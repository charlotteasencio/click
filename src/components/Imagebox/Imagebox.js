import React, { Component } from "react";
import "./Imagebox.css";
import App from "../../App.js";

class Imagebox extends Component {
  render() {
    return <div className="imageBox" onClick={this.props.incrementScore} />;
  }
}
export default Imagebox;
