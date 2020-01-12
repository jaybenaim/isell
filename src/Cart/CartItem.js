import React, { Component } from "react";
import "./cartItem.css";
class CartItem extends Component {
  state = {};
  render() {
    const { error, item } = this.props;
    const { name, price, description, image } = item;

    return (
      <>
        {error ? (
          <div>No Items in cart.</div>
        ) : (
          <div className="modal-cart-item">
            <img src={image} alt={name} className="modal-cart-image" />
            <span>{name}</span>
            <span>{price}</span>
            <span>X</span>
          </div>
        )}
      </>
    );
  }
}

export default CartItem;
