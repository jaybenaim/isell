import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./checkoutItem.css";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";

class CheckoutItem extends Component {
  state = {};

  render() {
    const { id, name, description, price, image, qty, removeItem } = this.props;
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
          onClick={() => removeItem(id, price)}
        >
          X
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { items, qty } = state.handleItem;
  const cart = { items, qty };

  return { cart };
};

export default connect(mapStateToProps, { removeItem })(CheckoutItem);
