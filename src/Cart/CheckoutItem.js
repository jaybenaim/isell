import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./checkoutItem.css";
class CheckoutItem extends Component {
  state = {};
  // handleDelete = id => {
  //   const { removeFromCart, cartQty, cart } = this.props;
  //   removeFromCart(id);
  //   return cartQty <= 1 ? (
  //     <Redirect to="/" />
  //   ) : (
  //     <Redirect to={{ pathname: "/ShoppingCart", state: { cart: cart } }} />
  //   );
  // };
  // move to cart componemt
  render() {
    const { id, name, description, price, image, qty } = this.props;
    return (
      <div className="checkout-item">
        <img className="checkout-item-image" src={image} alt={name} />
        <div className="checkout-item-name"> {name}</div>
        <div className="checkout-item-desc">{description}</div>
        <div className="checkout-item-qty">
          QTY <br /> {qty}{" "}
        </div>
        <div className="checkout-item-price">${price * qty}</div>
        <button
          className="btn btn-outline-danger checkout-item-delete-btn"
          onClick={() => this.props.removeFromCart(id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default CheckoutItem;
