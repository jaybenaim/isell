import { ADD_USER } from "../actionTypes";

export const userDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      });
    default:
      return state;
  }
};
