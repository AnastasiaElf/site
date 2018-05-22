import React, { Component } from "react";
import logo from "./images/elf.png";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
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
              <a href="/card">Card</a>
            </li>
            <li>
              <a href="/demos">Demos</a>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
