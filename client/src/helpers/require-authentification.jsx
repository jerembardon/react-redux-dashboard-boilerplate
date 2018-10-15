import React, { Component } from "react";
import { connect } from "react-redux";

// HOC for authentifiation
export default function(ChildComponent) {
  class RequiredAuthentification extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isLoggedIn) {
        this.props.history.push("/Dashboard");
      }
    }

    render() {
      return this.props.isLoggedIn && <ChildComponent />;
    }
  }

  const mapStateToProps = state => {
    return {
      isLoggedIn: state.authentification.isLoggedIn
    };
  };

  return connect(mapStateToProps)(RequiredAuthentification);
}
