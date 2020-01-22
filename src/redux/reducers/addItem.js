import { ADD_ITEM } from "../actionTypes";

export const addItemToCartReducer = (state = { items: [], qty: 0 }, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(action.payload.item);
      const { item, qty } = action.payload;
      return Object.assign({}, state, {
        items: [...state.items, action.payload.item],
        qty: state.qty + qty
      });
    default:
      return state;
  }
};
export default addItemToCartReducer;
