import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import History from "./History";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ul>
          <NavLink
            to="/"
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            History
          </NavLink>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
      </div>
    );
  }
}

export default App;
