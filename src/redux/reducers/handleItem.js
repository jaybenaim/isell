import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const handleItem = (
  state = { items: [], qty: 0, totalCostBeforeTax: 0 },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
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
    case REMOVE_ITEM:
      const { id } = action.payload;
      const { items, totalCostBeforeTax, qty: prevQty } = state;
      const itemBeingRemoved = items.filter(item =>
        item.id === id ? item : {}
      );

      return Object.assign({}, state, {
        items: [...items.filter(item => (item.id !== id ? item.id : null))],
        qty: prevQty - 1,
        totalCostBeforeTax: Number(
          Number(totalCostBeforeTax - Number(itemBeingRemoved.price)).toFixed(2)
        )
      });
    default:
      return state;
  }
};

export default handleItem;
