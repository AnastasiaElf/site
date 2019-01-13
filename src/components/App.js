import React, { Component } from 'react';
import './App.css';
import logo from "./../images/elf.png";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';
import {
    NavLink as RRDLink,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar className="app-navbar" expand="md">
                    <NavbarBrand href="/home">
                        <img src={logo} className="app-logo" alt="logo" />
                    </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="navbar-item">
                            <NavLink tag={RRDLink} className="navbar-item-link" to="/home" activeClassName="active">Home</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="navbar-item">
                            <NavLink tag={RRDLink} className="navbar-item-link" to="/about" activeClassName="active">About</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <NavLink tag={RRDLink} className="navbar-item-link" to="/contact" activeClassName="active">Contact</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className="navbar-item-link" nav caret>
                                Components
                            </DropdownToggle>
                            <DropdownMenu right className="nav-dropdown-menu">
                                <NavLink tag={Link} className="nav-dropdown-menu-item" to="/demos">Buttons</NavLink>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/home" render={this.renderContent("home")} />
                    <Route exact path="/about" render={this.renderContent("about")} />
                    <Route exact path="/contact" render={this.renderContent("contact")} />
                    <Route path="/" render={this.renderContent()} />
                </Switch>
            </div>
        );
    }

    renderContent = (component) => () => {
        if (!component) {
            return (
                <Redirect to="/home" />
            )
        }

        switch (component) {
            case "home":
                return (
                    <div className="content-container">
                        <Home />
                    </div>
                );
            case "about":
                return (
                    <div className="content-container">
                        <About />
                    </div>
                );
            case "contact":
                return (
                    <div className="content-container">
                        <Contact />
                    </div>
                );
            default:
                return <div />;
        }
    }
}

export default App;
