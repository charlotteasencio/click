import React from "react";
import "./Header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
<div>
<div className="header fixed-top">
    <p className="score">
      Score:
    </p>
    <p className="clickImage"> Click any image to begin</p>
    <p className="topScore" id="end">
      Top Score:
    </p>
  </div>
  <div className="instructions">
    <h1>ClickyGame</h1>
    <p>Your goal is to click every image but never click an image more than once.</p>
  </div>
</div>
);

export default Header;
