import React, { Component } from "react";
import Imagebox from "../Imagebox";
import "./Imagegrid.css";
import images from "../../images.json";

class Imagegrid extends Component {
  render() {
    console.log("Imagegrid", this.props);
    return (
      <div className="imageGrid">
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
        <Imagebox />
      </div>
    );
  }
}

export default Imagegrid;
