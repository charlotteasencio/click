import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Imagebox from "./components/Imagebox";
import Imagegrid from "./components/Imagegrid";
import Images from "./images.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Images,
      clickedImages: [],
      score: 0,
      topScore: 0
    };

    for (let i = 0; i < 10; i++) {
      this.state.Images.push(i);
    }
    console.log(this.state);
  }

  //function to handle click event
  //function to increment score
  imageClick = event => {
    const currentImage = event.target.alt;
    const imageAlreadyClicked =
      this.state.clickedImages.indexOf(currentImage) > -1;
  };

  if(imageAlreadyClicked) {
    this.setState({
      image: this.state.Image.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedImages: [],
      score: 0
    });
    alert("You lose. Play again?");
  }
  //function to shuffleCards
  //function for top score
  //reset function
  resetFunction = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }
  };

  render() {
    return (
      <div>
        <div className="header fixed-top">
          <p className="score">Score: {this.state.score}</p>
          <p className="clickImage"> Click any image to begin</p>
          <p className="topScore" id="end">
            Top Score: {this.state.topScore}
          </p>
        </div>
        <Header />
        <Imagegrid>
          {this.state.Images.map(image => (
            <Imagebox id={image.id} key={image.id} image={image.image} />
          ))}
        </Imagegrid>
      </div>
    );
  }
}

export default App;
