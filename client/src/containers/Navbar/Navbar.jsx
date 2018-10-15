import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    if (this.props.isLoggedIn && this.props.location.pathname !== "/") {
      return (
        <div style={{ position: "absolute;", background: "transparent" }}>
          {" "}
          Nav
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
