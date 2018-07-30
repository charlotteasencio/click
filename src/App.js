import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Imagebox from './components/Imagebox';
import images from "./images.json";
import Imagegrid from './components/Imagegrid';

class App extends Component {

  state = {
    images,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

//function to shuffleCards
//function to handle click event
//function to increment score
//function for top score
//reset function 


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
