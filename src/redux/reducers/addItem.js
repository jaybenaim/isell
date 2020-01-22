import { ADD_ITEM } from "../actionTypes";

export const addItemToCartReducer = (
  state = { items: [], qty: 0, totalCostBeforeTax: 0 },
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { item, qty } = action.payload;
      return Object.assign({}, state, {
        items: [...state.items, action.payload.item],
        qty: state.qty + qty,
        totalCostBeforeTax: state.totalCostBeforeTax + parseFloat(item.price)
      });
    default:
      return state;
  }
};
export default addItemToCartReducer;
