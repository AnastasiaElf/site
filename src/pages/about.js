import React, { Component } from "react";
import "./styles.css";
import me from "./images/me.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div className="about_cards">
          <div className="about_card">
            <img src={me} className="me_image" alt="image" />
            <div className="text">
              My name is Anastasia. I'm a cheerful pessimist and just a good
              person =) <br /> Don't even try to understand me, otherwise you'll
              break your head =D
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
