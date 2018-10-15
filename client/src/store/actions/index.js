import { SET_AUTHENTIFICATION, PARSE_ERROR, RESET_ERROR } from "./action-types";
import axios from "axios";

const BASE_URL = "http://localhost:3090";
export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
}

export function signinUser({ email, password }, history) {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signin`, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("Token", response.data.token);
        dispatch(setAuthentification(true));
        history.push("/dashboard");
      })
      .catch(error => {
        dispatch(parseError("Impossible de trouver l'utilisateur"));
      });
  };
}

export function signupUser({ email, password }, history) {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signup`, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("Token", response.data.token);
        dispatch(setAuthentification(true));
        history.push("/lol");
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function signoutUser() {
  return function(dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem("Token");
  };
}

export function parseError(errorMessage) {
  return {
    type: PARSE_ERROR,
    payload: errorMessage
  };
}

export function resetError() {
  return {
    type: RESET_ERROR
  };
}

// SELECTORS EXEMPLE SEE RESSOURCE PAGE
// export function getSpecialRessource() {
//   return function(dispatch) {
//     axios
//       .get(`${BASE_URL}/lol`, {
//         headers: { authorization: localStorage.getItem("Token") }
//       })
//       .then(response => {
//         dispatch({
//           type: GET_SPECIAL_RESOURCE,
//           payload: response.data.result
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// }

// export function addRessource() {
//   return {
//     type: ADD_RESSOURCE
//   };
// }
