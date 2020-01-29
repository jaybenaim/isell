import { ADD_ITEM, REMOVE_ITEM, CREATE_CART, GET_CART } from "../actionTypes";

const handleItem = (
  state = {
    cart: { items: [], qty: 0, id: null },
    totalCostBeforeTax: 0,
    user: { id: null }
  },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      let { item, qty } = action.payload;
      const { id: itemId } = item;
      const {
        cart: { items: prevItems, qty: prevQty, id: prevCartId },
        totalCostBeforeTax
      } = state;
      let total = 0;
      item.qty = qty;

      for (let i = 1; i <= qty; i++) {
        total += Number(item.price);
      }
      const items = [
        ...prevItems.filter(item => (item.id !== itemId ? item : null)),
        item
      ];
      return Object.assign({}, state, {
        cart: {
          items,
          qty: items.length,
          id: prevCartId
        },
        totalCostBeforeTax: Number(
          Number(totalCostBeforeTax + Number(total)).toFixed(2)
        )
      });

    case REMOVE_ITEM:
      const { id, price } = action.payload;
      const {
        cart: { items: stateItems, qty: stateQty },
        totalCostBeforeTax: totalBeforeTax
      } = state;

      return Object.assign({}, state, {
        cart: {
          items: [
            ...stateItems.filter(item => (item.id !== id ? item.id : null))
          ],
          qty: stateQty - 1,
          id: prevCartId
        },
        totalCostBeforeTax: Number(Number(totalBeforeTax - price).toFixed(2))
      });

    case CREATE_CART:
      const data = action.data;
      const {
        _id,
        user: { id: i }
      } = data;
      console.log(data);
      return Object.assign({}, state, {
        user: { id: i },
        cart: { items: [], qty: 0, id: _id }
      });

    case GET_CART:
      const {
        cart: { products: productItems, _id: cartId, createdAt },
        user
      } = action;

      return Object.assign({}, state, {
        user,
        cart: {
          items: productItems,
          qty: productItems.length,
          id: cartId
        }
      });

    default:
      return state;
  }
};

export default handleItem;
