import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import RessourceReducer from "./add-ressource";

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  ressources: RessourceReducer
});

export default rootReducer;
