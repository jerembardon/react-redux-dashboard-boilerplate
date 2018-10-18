import React, { Component } from "react";
import { connect } from "react-redux";

class Invoice extends Component {
  render() {
    return <div>Invoice</div>;
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  null
)(Invoice);
