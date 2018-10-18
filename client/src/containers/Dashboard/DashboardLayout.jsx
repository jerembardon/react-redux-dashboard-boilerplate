import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router";

import General from "../General/General";
import Invoice from "../Invoice/Invoice";
import Navbar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import Patient from "../Patient/Patient";

class DashboardLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="globalContainer">
          <Switch>
            <Route path="/dashboard/general" component={General} />
            <Route path="/dashboard/patient" component={Patient} />
            <Route path="/dashboard/invoice" component={Invoice} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
