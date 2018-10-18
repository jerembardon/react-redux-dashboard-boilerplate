import React, { Component } from "react";
import { Route, Switch } from "react-router";

//import Ressource from "./../Ressource/Ressource";
import Signin from "../Auth/Signin";
import Signout from "../Auth/Signout";
import Signup from "../Auth/Signup";
import Errors from "../../components/Errors/Errors";

// Helpers
import RequireAuthentification from "./../../helpers/require-authentification";
import DashboardLayout from "../../containers/Dashboard/DashboardLayout";

export default class App extends Component {
  render() {
    return (
      <div>
        <Errors />
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/signup" component={Signup} />
          <Route
            path="/dashboard"
            component={RequireAuthentification(DashboardLayout)}
          />
        </Switch>
      </div>
    );
  }
}
