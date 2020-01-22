import { ADD_ITEM } from "../actionTypes";

export const addItemToCartReducer = (
  state = { items: [], qty: 0, totalCostBeforeTax: 0 },
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { item, qty } = action.payload;
      let total = 0;

      for (let i = 1; i <= qty; i++) {
        total += Number(item.price);
      }
      //// move checkItemIsInCart here
      // create REMOVE TO CART REDUCER FIRST
      return Object.assign({}, state, {
        items: [...state.items, action.payload.item],
        qty: state.qty + qty,
        totalCostBeforeTax: Number(
          Number(state.totalCostBeforeTax + Number(total)).toFixed(2)
        )
      });
    default:
      return state;
  }
};

export default addItemToCartReducer;
