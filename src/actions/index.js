import { SET_AUTHENTIFICATION } from "./action-types";

export function setAuthentification(isLoggedIn) {
  return function(dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn
    });
  };
}
