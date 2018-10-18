import React, { Component } from "react";
import { resetError } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class Errors extends Component {
  componentWillUpdate(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.props.resetError();
    }
  }

  render() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          <p>{this.props.error}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    error: state.errors.message
  };
};

const mapDispatchToProps = {
  resetError
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Errors)
);
