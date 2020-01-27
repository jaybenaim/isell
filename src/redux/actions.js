import { ADD_ITEM, REMOVE_ITEM, CREATE_CART } from "./actionTypes";

// make api calls here for simple calls
// use react-thunk as package?

export const createCart = data => {
  return {
    type: CREATE_CART,
    data
  };
};

export const addItem = (qty, item) => {
  // local.patch("/", item)
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
