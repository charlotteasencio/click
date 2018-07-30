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
      cards: [],
      currentScore: 0,
      topScore: 0,
      alreadyClicked: null,
      guessedCorrectly: null,
      images,
    };

    for (let i=0; i<10; i++) {
      this.state.cards.push(i)
    }
    console.log(this.state);
  }
  //function to shuffleCards
  //function to handle click event
  //function to increment score
  //function for top score
  //reset function

  render() {
    return (
      <div>
        <Header />
        <Imagegrid>
          {this.state.images.map(image => (
              <Imagebox id={image.id} key={image.id} image={image.image} />
          ))}
        </Imagegrid>
      </div>
    );
  }
}

export default App;
