import { ADD_RESSOURCE } from "../actions/action-types";

const initialState = {
  ressourcesList: [0]
};

export default function RessourceReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESSOURCE:
      return {
        ressourcesList: [
          ...state.ressourcesList,
          state.ressourcesList[state.ressourcesList.length - 1] + 1
        ]
      };
    default:
      return state;
  }
}
