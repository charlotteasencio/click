import React, { Component } from "react";
import Imagebox from "../Imagebox";
import "./Imagegrid.css";

class Imagegrid extends Component {
  render() {
    var imageArray = [];
    for (let i = 0; i < 12; i++) {
      imageArray.push(<Imagebox incrementScore={this.props.incrementScore} />);
    }
    console.log("Imagegrid", this.props);
    return <div className="imageGrid">{imageArray}</div>;
  }
}

export default Imagegrid;
