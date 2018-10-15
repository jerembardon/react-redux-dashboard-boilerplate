// import { ADD_RESSOURCE, GET_SPECIAL_RESOURCE } from "../actions/action-types";

// const initialState = {
//   ressourcesList: [0],
//   message: ""
// };

// export default function RessourceReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_RESSOURCE:
//       return {
//         ressourcesList: [
//           ...state.ressourcesList,
//           state.ressourcesList[state.ressourcesList.length - 1] + 1
//         ]
//       };
//     case GET_SPECIAL_RESOURCE:
//       return {
//         ...state,
//         message: action.payload
//       };
//     default:
//       return state;
//   }
// }
