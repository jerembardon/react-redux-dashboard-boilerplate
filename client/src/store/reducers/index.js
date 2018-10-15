import { combineReducers } from "redux";
import AuthentificationReducer from "./authReducer";
import ErrorReducer from "./errorsReducer";
import { reducer as form } from "redux-form";
// import RessourceReducer from "./add-ressource";

const rootReducer = combineReducers({
  // ressources: RessourceReducer,
  authentification: AuthentificationReducer,
  errors: ErrorReducer,
  form
});

export default rootReducer;
