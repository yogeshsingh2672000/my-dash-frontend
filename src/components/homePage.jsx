import React, { Component } from "react";
import Background from "./background.png";

class Home extends Component {
  // state = {  }
  render() {
    return (
      <div className="container">
        <div className="container__image">
          <img src={Background} alt="background image" />
        </div>
        <div className="container__form"></div>
      </div>
    );
  }
}

export default Home;
