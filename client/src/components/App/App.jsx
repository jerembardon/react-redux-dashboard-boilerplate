import React, { Component } from "react";
import { Route, Switch } from "react-router";
//import Ressource from "./../Ressource/Ressource";
import Signin from "../Auth/Signin";
import Signout from "../Auth/Signout";
import Signup from "../Auth/Signup";
import Errors from "./../Errors/errors";

import Dashboard from "../../containers/Dashboard/Dashboard";
import Navbar from "../../containers/Navbar/Navbar";
// Helpers
import RequireAuthentification from "./../../helpers/require-authentification";

export default class App extends Component {
  render() {
    return (
      <div>
        <Errors />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/dashboard"
            component={RequireAuthentification(Dashboard)}
          />
        </Switch>
      </div>
    );
  }
}
