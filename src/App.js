import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Imagebox from './components/Imagebox/Imagebox';
import images from "./images.json";
import Imagegrid from './components/Imagegrid';


function shuffleCards (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    images,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "S",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(images);
    this.setState({ cards: shuffledCards });
  };

  render() {
    return (
    <div>
      <Header
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
      />
      <Imagegrid>
        {this.state.images.map(image => (
          <Imagebox
            id={image.id}
            key={image.id}
            image={image.image}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Imagegrid>
    </div>
    );
  }
}

export default App;
