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
      images,
      currentScore: 0,
      topScore: 0,
      show: true,
      rightWrong: "",
      clicked: []
    };
  }

  //function to shuffleCards
  //function to handle click event
  HandleClick = () => {
    this.setState({ show: !this.state.show });
  };
  //function to increment score
  IncrementItem = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  //function for top score
  //reset function

  render() {
    return (
      <div>
        <Header />
        <Imagegrid>
          {this.state.images.map(image => (
            <div>
              <Imagebox id={image.id} key={image.id} image={image.image} />
              <button onClick={this.IncrementItem} />
            </div>
          ))}
          {this.state.show ? <h2>{this.state.currentScore}</h2> : ""}
        </Imagegrid>
      </div>
    );
  }
}

export default App;
