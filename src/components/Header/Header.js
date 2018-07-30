import React from "react";
import "./Header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
<div className="instructions">
  <h1>ClickyGame</h1>
  <p>Your goal is to click every image but never click an image more than once.</p>
</div>
);

export default Header;
