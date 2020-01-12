import React, { Component } from "react";
import "./checkoutItem.css";
class CheckoutItem extends Component {
  state = {};

  render() {
    const { name, description, price, image, qty } = this.props;
    return (
      <div className="checkout-item">
        <img className="checkout-item-image" src={image} alt={name} />
        <div className="checkout-item-name"> {name}</div>
        <div className="checkout-item-desc">{description}</div>
        <div className="checkout-item-qty">
          QTY <br /> {qty}{" "}
        </div>
        <div className="checkout-item-price">{price}</div>
      </div>
    );
  }
}

export default CheckoutItem;
