import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarLeftStyle = styled.nav`
  position: fixed;
  max-width: 280px;
  width: 280px;

  transform: translateX(0px);
  top: 0;
  bottom: 0;
  box-shadow: 0 12px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  background-color: #1c2432;
  border-left: 1px solid #eeeeee;

  @media (max-width: 960px) {
    width: 80px;
  }
`;

export const LogoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  .logo {
    width: 35px;
  }
  p {
    font-weight: 200;
    font-size: 1em;
    text-transform: uppercase;
    margin: 0;
    margin-left: 8px;
    color: #ffffff;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  padding: 32px 0px;
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none !important;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffffff;
  text-align: right;
  padding: 16px;
  border-left: 4px solid transparent;
  transition: all 0.2s ease-in-out;
  i {
    margin-right: 16px;
  }
  &:hover {
    text-decoration: none;
    background-color: #303744;
    color: #ffffff;
  }

  &.active {
    background-color: #303744;
    border-left: 4px solid #0694fa;
    position: relative;
    color: #0694fa;

    &::after {
      content: "";
      position: absolute;
      right: -2px;
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid #f5f9ff;
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
    i {
      margin-right: 0;
    }

    &.active {
      &::after {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #fafafa;
      }
    }
  }
`;
