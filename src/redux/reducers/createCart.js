import { CREATE_CART } from "../actionTypes";

const createCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case CREATE_CART:
      const data = action.data;
      console.log(data);
      const {
        _id: cartId,
        products: items,
        qty = 0,
        user: { id }
      } = data;

      return Object.assign({}, state, {
        user: { id },
        cart: { items, qty, id: cartId }
      });

    default:
      return state;
  }
};
export default createCart;
