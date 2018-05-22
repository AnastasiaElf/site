import React, { Component } from "react";
import logo from "./images/elf.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="App-header">
          <li>
            <a href="/" className="logo_home">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stuff">Stuff</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <h1 className="App-title">Welcome to my world.</h1>
      </div>
    );
  }
}

export default App;
