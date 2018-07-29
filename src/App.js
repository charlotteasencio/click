import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Imagebox from './components/Imagebox/Imagebox';
import images from "./images.json";
import Imagegrid from './components/Imagegrid';

class App extends Component {

  state = {
    images
  };

  render() {
    return (
    <div>
      <Header/>
      <Imagegrid>
        {this.state.images.map(image => (
          <Imagebox
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
      </Imagegrid>
    </div>
    );
  }
}

export default App;
