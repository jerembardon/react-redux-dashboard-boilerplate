import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Navbar from "../../containers/Navbar/Header";
import Ressource from "./../Ressource/Ressource";
import Home from "./../Home/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ressources" component={Ressource} />
        </Switch>
      </div>
    );
  }
}
