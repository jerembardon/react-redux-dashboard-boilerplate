import React, { Component } from "react";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  onAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn) {
      return "Déconnexion";
    } else {
      return "Connexion";
    }
  };

  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ressources">
              Ressources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.onAuthentification}>
              {this.renderAuthentificationLabel()}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  actions
)(Navbar);
