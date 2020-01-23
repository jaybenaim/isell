import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

const handleItem = (
  state = { items: [], qty: 0, totalCostBeforeTax: 0 },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      let { item, qty } = action.payload;
      const { id: itemId } = item;
      const { items: prevItems, totalCostBeforeTax, qty: prevQty } = state;
      let total = 0;
      item.qty = qty;

      for (let i = 1; i <= qty; i++) {
        total += Number(item.price);
      }

      return Object.assign({}, state, {
        items: [
          ...prevItems.filter(item => (item.id !== itemId ? item : null)),
          item
        ],
        qty: prevQty + qty,
        totalCostBeforeTax: Number(
          Number(totalCostBeforeTax + Number(total)).toFixed(2)
        )
      });

    case REMOVE_ITEM:
      const { id, price } = action.payload;
      const {
        items: stateItems,
        totalCostBeforeTax: totalBeforeTax,
        qty: stateQty
      } = state;

      return Object.assign({}, state, {
        items: [
          ...stateItems.filter(item => (item.id !== id ? item.id : null))
        ],
        qty: stateQty - 1,
        totalCostBeforeTax: Number(Number(totalBeforeTax - price).toFixed(2))
      });
    default:
      return state;
  }
};

export default handleItem;
