import { ADD_ITEM, REMOVE_ITEM, CREATE_CART, GET_CART } from "../actionTypes";

const handleItem = (
  state = {
    cart: { items: [], qty: 0, id: null, totalCostBeforeTax: 0 },
    user: { id: null, profile: [] }
  },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      let { item, qty } = action.payload;
      const { id: itemId } = item;
      const {
        cart: { items: prevItems, qty: prevQty, id: prevCartId }
      } = state;
      item.qty = qty;

      const items = [
        ...prevItems.filter(item => (item._id !== itemId ? item : null)),
        item
      ];
      const totalBeforeTax = calculatePrice(items);
      const newQty = items ? items.length : 0;

      return Object.assign({}, state, {
        cart: {
          items,
          qty: newQty,
          id: prevCartId,
          totalCostBeforeTax: totalBeforeTax.toFixed(2)
        }
      });

    case REMOVE_ITEM:
      const { products } = action.payload;
      const {
        cart: { id: cartID }
      } = state;
      console.log(action);

      const totalBeforeTaxes = calculatePrice(products);
      const newRemovedQty = products ? products.length : 0;

      return Object.assign({}, state, {
        cart: {
          items: products,
          id: cartID,
          totalCostBeforeTax: totalBeforeTaxes.toFixed(2),
          qty: newRemovedQty
        }
      });

    case CREATE_CART:
      const data = action.data;
      console.log(data);

      const {
        _id,
        user: { id: i }
      } = data;
      return Object.assign({}, state, {
        user: { id: i },
        cart: { items: [], qty: 0, id: _id, totalCostBeforeTax: 0 }
      });

    case GET_CART:
      console.log(action);
      const {
        cart: { products: productItems, _id: cartId, createdAt },
        user
      } = action;
      const totalBeforeTaxed = calculatePrice(productItems);
      const newGetQty = productItems ? productItems.length : 0;
      return Object.assign({}, state, {
        user,
        cart: {
          items: productItems,
          qty: newGetQty,
          id: cartId,
          totalCostBeforeTax: totalBeforeTaxed.toFixed(2)
        }
      });

    default:
      return state;
  }
};
const calculatePrice = items => {
  let result = 0;

  if (!items) {
    return result;
  } else {
    items.map(item => {
      return (result += Number(item.price * item.qty));
    });
  }
  return result;
};

export default handleItem;
