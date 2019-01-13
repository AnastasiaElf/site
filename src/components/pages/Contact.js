import React, { Component } from "react";
import "./styles.css";
import gmail from "./../../images/gmail.png";
import github from "./../../images/github.svg";
import vk from "./../../images/vk.png";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contacts-card">
          <div className="contact">
            <img src={gmail} className="image-contact" alt="image_contact" />
            <div> Email:  anastasia.elf.17@gmail.com </div>
          </div>
          <div className="contact">
            <img src={github} className="image-contact" alt="image_contact" />
            <div>{"Github:  "}
              <a href="https://github.com/AnastasiaElf">AnastasiaElf</a>
            </div>
          </div>
          <div className="contact">
            <img src={vk} className="image-contact" alt="image_contact" />
            <div>{"VK:  "}
              <a href="https://vk.com/elf_art">vk.com/elf_art</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
