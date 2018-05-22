import React, { Component } from "react";
import logo from "./images/elf.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to my world.</h1>
      </div>
    );
  }
}

export default App;
