import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
