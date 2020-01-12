import React, { Component } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import "./cartItem.css";
class CartItem extends Component {
  state = {};
  shortDescription = description => {
    if (description.length <= 15) {
      return description;
    } else {
      return description.slice(0, 15) + "...";
    }
  };
  render() {
    const { error, item, hideModal, removeFromCart } = this.props;
    const { id, name, price, description, image, qty } = item;

    return (
      <>
        {error ? (
          <div>No Items in cart.</div>
        ) : (
          <div className="modal-cart-item">
            <Link
              to={{
                pathname: `/Products/${id}/show`,
                state: { name, description, price, image }
              }}
              className="modal-cart-image"
              onClick={() => hideModal()}
            >
              <img src={image} alt={name} className="modal-cart-image" />
            </Link>
            <span className="modal-cart-name">{name}</span>
            <span className="modal-cart-short-desc">
              {this.shortDescription(description)}
            </span>

            <span className="modal-cart-price">Cost: ${price * qty} </span>
            <span lassName="modal-cart-qty">
              QTY: {qty} @ ${price}
            </span>
            <span
              className="modal-cart-remove-item btn btn-outline-danger"
              onClick={() => removeFromCart(id)}
            >
              Remove Item
            </span>
          </div>
        )}
      </>
    );
  }
}

export default CartItem;
