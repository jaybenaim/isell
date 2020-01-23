import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

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

export const removeItem = (id, price) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
      price
    }
  };
};
