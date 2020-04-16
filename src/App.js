import React from "react";
import logo from "../src/Components/style/Images/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Templates from "../src/Components/Templates";
import Signup from "../src/Components/Signup";
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";
import Contact from "./Components/Contact";
import Container from "react-bootstrap/Container";

function Navbar() {
  return (
    <Router>
      <Container fluid className="navbar">
        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/templates">View Templates</Link>
          </li>
          <img src={logo} className="logoImg" alt="Logo" />
          <li>
            <Login />
          </li>
          <li>
            <Signup />
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/templates">
            <Templates />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Navbar;
