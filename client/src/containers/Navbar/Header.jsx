import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  HeaderStyle,
  LinkDeconnexion
} from "../../assets/style/layout/Header.style";

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderStyle>
          <div>
            <LinkDeconnexion to="/signout">Déconnexion</LinkDeconnexion>
          </div>
        </HeaderStyle>
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
)(Header);
