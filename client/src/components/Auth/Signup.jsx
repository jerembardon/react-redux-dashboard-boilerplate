import React, { Component } from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as validations from "../../helpers/validations";

const FIELDS = {
  email: "email",
  password: "password",
  secondPassword: "secondPassword"
};

class Signup extends Component {
  handleSubmit = data => {
    this.props.signupUser(data, this.props.history);
  };

  renderInputComponent = field => {
    return (
      <div className="row justify-content-md-center">
        <fieldset className="col-md-4 form-group">
          <label className="bmd-label-floating">{field.label}</label>
          <input {...field.input} type={field.type} className="form-control" />
          {field.meta.touched &&
            field.meta.error && (
              <div style={{ color: "red" }}>{field.meta.error}</div>
            )}
        </fieldset>
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      fields: {}
    } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="row justify-content-md-center">
          <h1>Inscription</h1>
        </div>
        <Field
          name={FIELDS.email}
          component={this.renderInputComponent}
          type="text"
          label="email"
        />
        <Field
          name={FIELDS.password}
          component={this.renderInputComponent}
          type="password"
          label="password"
        />
        <Field
          name={FIELDS.secondPassword}
          component={this.renderInputComponent}
          type="password"
          label="password"
        />

        <div className="row justify-content-md-center">
          <button type="submit" className="btn btn-primary btn-raised">
            Inscription
          </button>
        </div>
      </form>
    );
  }
}

function validate(formValues) {
  const errors = {};
  errors.email = validations.validateEmail(formValues.email);
  errors.password = validations.validateNotEmpty(formValues.password);
  errors.secondPassword = validations.validateEqual(
    formValues.password,
    formValues.secondPassword
  );
  return errors;
}

const SignupForm = reduxForm({
  form: "SignupForm",
  fields: Object.keys(FIELDS),
  validate
})(Signup);

export default connect(
  null,
  actions
)(SignupForm);
