import React, { Component } from "react";
import logo from "./images/elf.png";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Button from "./component/button/button";
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
          {/* <Button name="button" /> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
