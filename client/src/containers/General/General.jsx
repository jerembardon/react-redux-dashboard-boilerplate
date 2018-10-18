import React, { Component } from "react";
import { connect } from "react-redux";

class General extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">General</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  null
)(General);
