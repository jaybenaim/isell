import React, { Component } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";
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
    const { error, item, hideModal } = this.props;
    const { id, name, price, description, image, qty } = item;

    return (
      <>
        {error ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.6em"
            }}
          >
            {error}
          </div>
        ) : (
          <div className="modal-cart-item-container">
            <Link
              to={{
                pathname: `/Products/${id}/show`,
                state: { name, description, price, image }
              }}
              className="modal-link-to-product-show"
              onClick={() => hideModal()}
            >
              <img src={image} alt={name} className="modal-cart-image" />
            </Link>
            <span className="modal-cart-name">{name}</span>
            <span className="modal-cart-short-desc">
              {this.shortDescription(description)}
            </span>

            <span className="modal-cart-price">
              CAD <strong>${price * qty}</strong>{" "}
            </span>
            <span className="modal-cart-qty">
              QTY {qty} @ ${price}
            </span>
            <button
              className="modal-cart-remove-item btn btn-outline-danger"
              onClick={() => this.props.removeItem(id, price)}
            >
              Remove Item
            </button>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { items, qty } = state.handleItem;
  const cart = { items, qty };
  console.log(state);
  return { cart };
};

export default connect(mapStateToProps, { removeItem })(CartItem);
