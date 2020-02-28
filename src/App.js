import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// components
import Sidebar from "./View/Common/Sidebar.js";
import User from "./View/User/User.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <div className="app_container">
            <Route
              path="/"
              exact
              strict
              render={props => <h1> Hello Admin</h1>}
            />
            <Route
              path="/client"
              exact
              strict
              render={props => <User />}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
