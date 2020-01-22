import { ADD_USER, ADD_ITEM } from "./actionTypes";

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
};
// make api calls here for simple calls
// use react-thunk as package?
export const addItem = (qty, item) => {
  return {
    type: ADD_ITEM,
    payload: {
      qty,
      item
    }
  };
};
