import { SET_AUTHENTIFICATION, ADD_RESSOURCE } from "./action-types";

export function setAuthentification(isLoggedIn) {
  return function(dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn
    });
  };
}

export function addRessource() {
  return {
    type: ADD_RESSOURCE
  };
}
