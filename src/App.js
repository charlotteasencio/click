import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Imagebox from "./components/Imagebox";
import Imagegrid from "./components/Imagegrid";
import images from "./images.json";

let score = 0;
let topScore = 0;

class App extends Component {
    
  state = {
    images,
    score,
    topScore,
    };

    shuffleArray = images => {
      for (let i = images.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [images[i], images[j]] = [images[j], images[i]];
      }
    }

    doClick = id => {

      // Filter this.state.images for images with an id equal to the id clicked
      const handleClick = this.state.images.filter(image => image.id === id);

   
      if (handleClick[0].clicked){

          score = 0;

          for (let i = 0 ; i < images.length ; i++){
              images[i].clicked = false;
          }

          this.setState({ 
            score: score,
            images: images 
          });

          //if the number of correct guesses in less than 11 then set the image clicked to true and increment score 
      } else if (score < 11) {

          handleClick[0].clicked = true;

          score++

          //if correct guesses is great than topScore set topScore equal to correct Guesses
          if (score > topScore){
              topScore = score;
              this.setState({ topScore });
          }

          //shuffle images to a random order
          this.shuffleArray(images);

          this.setState({ 
            score: score,
            images: images
          });

      } else {

        //if image clicked on is already equal to true then reset correct Guesses to zero
          handleClick[0].clicked = true;
          score = 0;
          this.setState({ topScore });
          
          //reset all of the clickeds to false
          for (let i = 0 ; i < images.length ; i++){
              images[i].clicked = false;
          }

          //shuffle all of the images
          this.shuffleArray(images);

          this.setState({ 
            score: score,
            images: images
          });

      }
  };

  render() {
      return (
  <div>
      <div className="fixed-top">
          <p>Score: {this.state.score} </p>
          <p> Top Score: {this.state.topScore} </p>
       </div>
            <Header />
            <Imagegrid>
              {this.state.images.map(image => (
                  <Imagebox
                      doClick={this.doClick}
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
