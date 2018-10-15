import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./../containers/Navbar/Header";

import { shallow, mount } from "enzyme";
import RootTest from "./root-test";
import { SET_AUTHENTIFICATION } from "../actions/action-types";
import AuthentificationReducer from "../reducers/authentification";

describe("<TodoApp />", function() {
  it("Render headers component", () => {
    const wrapper = shallow(
      <RootTest>
        <Navbar />
      </RootTest>
    );
  });

  it("Test Label connexion transformation after click: must be deconnexion", () => {
    const wrapper = mount(
      <RootTest>
        <Navbar />
      </RootTest>
    );
    // Test if "Connexion" is set correctly
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Connexion");

    // Click on "Connexion" link
    wrapper
      .find("a")
      .at(2)
      .simulate("click");

    // Test if label changed in "Déconnexion" after click
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Déconnexion");
  });

  it("Test auth reducer without action.type", () => {
    const initialState = {
      isLoggedIn: false
    };
    expect(AuthentificationReducer(initialState, {}).isLoggedIn).toEqual(false);
  });

  it("Test auth reducer without payload", () => {
    const action = { type: SET_AUTHENTIFICATION, payload: true };
    const initialState = {
      isLoggedIn: false
    };
    expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(
      true
    );
  });
});
