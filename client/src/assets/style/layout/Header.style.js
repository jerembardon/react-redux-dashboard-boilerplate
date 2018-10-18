import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: space-between;

  padding: 16px;
  padding-left: 280px;
  margin-bottom: 16px;
  background-color: #ffffff;
  width: 100%;
`;

export const LinkDeconnexion = styled(NavLink)`
  color: #222;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px 32px;
  &:hover {
    background-color: #fafafa;
    text-decoration: none;
    color: #222;
  }
`;
