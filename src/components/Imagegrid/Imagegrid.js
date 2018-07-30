import React, { Component } from "react";
import Imagebox from "../Imagebox";
import "./Imagegrid.css";

class Imagegrid extends Component {
  render() {
    console.log("Imagegrid", this.props);
    return (
      <div>
        <div className="imageRow">
          <Imagebox />
          <Imagebox />
          <Imagebox />
          <Imagebox />
        </div>
        <div className="imageRow">
          <Imagebox />
          <Imagebox />
          <Imagebox />
          <Imagebox />
        </div>
        <div className="imageRow">
          <Imagebox />
          <Imagebox />
          <Imagebox />
          <Imagebox />
        </div>
      </div>
    );
  }
}

export default Imagegrid;
