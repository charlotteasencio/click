import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Imagebox from "./components/Imagebox";
import images from "./images.json";
import Imagegrid from "./components/Imagegrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      score: 0,
      topScore: 0,
      clicked: false,
      guessedCorrectly: null
    };

    for (let i = 0; i < 10; i++) {
      this.state.images.push(i);
    }
    console.log(this.state);
  }

  //function to handle click event
  //function to increment score
  incrementScore = () => {
    console.log("I've been clicked");
    console.log(this.state);
    this.setState({
      score: this.state.score + 1,
      clicked: true
    });
  };

  //function to shuffleCards
  //function for top score
  //reset function

  render() {
    return (
      <div>
        <div className="header fixed-top" onClick={this.incrementScore}>
          <p className="score">Score: {this.state.score}</p>
          <p className="clickImage"> Click any image to begin</p>
          <p className="topScore" id="end">
            Top Score:
          </p>
        </div>
        <Header />
        <Imagegrid
          order={this.state.images}
          incrementScore={this.incrementScore}
        />
      </div>
    );
  }
}

export default App;
