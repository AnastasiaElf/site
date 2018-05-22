import React, { Component } from "react";
import "./styles.css";
import gmail from "./images/gmail.png";
import github from "./images/github.svg";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contacts_card">
          <div className="contact">
            <img src={gmail} className="image_contact" alt="image" />
            <div> Email: anastasia.elf.17@gmail.com </div>
          </div>
          <div className="contact">
            <img src={github} className="image_contact" alt="image" />
            <div>Github: AnastasiaElf</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
