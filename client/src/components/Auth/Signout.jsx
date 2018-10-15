import React, { Component } from "react";
import { signoutUser } from "../../store/actions";
import { connect } from "react-redux";

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
    this.props.history.push("/");
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = {
  signoutUser
};

export default connect(
  null,
  mapDispatchToProps
)(Signout);
