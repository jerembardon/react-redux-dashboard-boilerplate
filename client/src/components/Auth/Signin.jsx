import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { signinUser } from "../../store/actions";
import { connect } from "react-redux";

// TStyle
import logoSimple from "../../assets/images/logo_white.png";
import {
  LoginStyleContainer,
  FormStyleContainer
} from "../../assets/style/pages/login.style";
import { FieldSet } from "./../../assets/style/components/Input.style";

const Fields = {
  email: "email",
  password: "password"
};

class Signin extends Component {
  handleSubmit = credentials => {
    this.props.signinUser(credentials, this.props.history);
  };

  render() {
    return (
      <LoginStyleContainer>
        <img src={logoSimple} alt="logo" />
        <h1>Stellar Dashboard</h1>
        <FormStyleContainer
          onSubmit={this.props.handleSubmit(this.handleSubmit)}
        >
          <div>
            <FieldSet>
              <label>Email</label>
              <Field
                name={Fields.email}
                type="text"
                className="form-control"
                component="input"
                placeholder="Indiquez votre adresse e-mail"
              />
            </FieldSet>
          </div>

          <div>
            <FieldSet>
              <label>Mot de passe</label>
              <Field
                name={Fields.password}
                type="password"
                className="form-control"
                component="input"
                placeholder="Indiquez votre mot de passe"
              />
            </FieldSet>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-raised">
              Connexion
            </button>
          </div>
        </FormStyleContainer>
      </LoginStyleContainer>
    );
  }
}

const signinForm = reduxForm({
  form: "signin",
  fields: Object.keys(Fields)
})(Signin);

const mapDispatchToProps = {
  signinUser
};

export default connect(
  null,
  mapDispatchToProps
)(signinForm);
