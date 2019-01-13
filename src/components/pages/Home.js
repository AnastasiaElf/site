import React, { Component } from "react";
import "./styles.css";
import image1 from "./../../images/image1.jpg";
import image2 from "./../../images/image2.jpg";
import image3 from "./../../images/image3.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home-title">Welcome to my little world.</h1>
        <div className="listing-cards">
          <div className="home-card">
            <img src={image1} className="card-image" alt="card_image" />
            <div className="card-text">
              Don't be afraid to dream. Everything great in this world begins
              with a dream.
            </div>
          </div>
          <div className="home-card">
            <div className="card-text">
              Don't be afraid to admit love. Maybe it will be mutual.
            </div>
            <img src={image2} className="card-image" alt="card_image" />
          </div>
          <div className="home-card">
            <img src={image3} className="card-image" alt="card_image" />
            <div className="card-text">
              Don't be afraid to create and experiment. Who knows what it can
              lead to.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
