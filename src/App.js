import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import History from "./History";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
      </div>
    );
  }
}

export default App;
