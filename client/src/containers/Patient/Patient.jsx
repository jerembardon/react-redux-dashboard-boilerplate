import React, { Component } from "react";
import { connect } from "react-redux";

class Patient extends Component {
  render() {
    return <div>Patient</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(Patient);
