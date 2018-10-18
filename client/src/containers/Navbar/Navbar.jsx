import React, { Component } from "react";
import { connect } from "react-redux";

import {
  NavbarLeftStyle,
  LogoContainer,
  LinkContainer,
  LinkStyled
} from "../../assets/style/layout/Navbar.style";
import logo from "./../../assets/images/logo_color.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  showMenu() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div>
        <NavbarLeftStyle className={this.state.active ? "active" : "inactive"}>
          <LogoContainer>
            <img src={logo} alt="logo entreprise" className="logo" />
            <p className="d-none d-lg-block"> Stellar Dashboard </p>
          </LogoContainer>

          <LinkContainer>
            <ul>
              <li>
                <LinkStyled activeClassName="active" to="/dashboard/general">
                  <i className="material-icons">dashboard</i>
                  <span className="d-none d-lg-block">Général</span>
                </LinkStyled>
              </li>
              <li>
                <LinkStyled activeClassName="active" to="/dashboard/patient">
                  <i className="material-icons">face</i>
                  <span className="d-none d-lg-block">Patients</span>
                </LinkStyled>
              </li>
            </ul>
          </LinkContainer>
        </NavbarLeftStyle>
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
)(Navbar);
