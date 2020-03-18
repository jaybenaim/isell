import React, { Component } from "react";
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";
import backend from "../../Api/backend";
import "./cartItem.css";
class CartItem extends Component {
  state = {};
  shortDescription = description => {
    return !description
      ? ""
      : description.length <= 15
      ? description
      : description.slice(0, 15) + "...";
  };
  handleRemoveItem = (id, price) => {
    const {
      removeItem: removeItemFromCart,
      cart: { items, id: cartID },
      item: { qty }
    } = this.props;
    const itemIds = items.filter(item => {
      return item._id !== id;
    });
    const ids = itemIds.map(item => {
      return item._id;
    });

    const data = { products: [...ids] };

    const productQty = { qty: 1 };
    if (qty > 1) {
      backend.patch(`/products/${id}`, productQty, {}).then(res => {
        console.log(res.statusText, "Product updated");
      });
    }
    backend
      .patch(`/carts/${cartID}`, data, {})
      .then(res => {
        console.log(res.data, "Item removed");
        removeItemFromCart(res.data);
      })
      .catch(err => {
        alert("Error removing item");
      });
  };
  render() {
    const { error, item, hideModal } = this.props;
    const { _id: id, name, price, description, image, qty } = item;

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
                pathname: `/products/${id}/show`,
                state: { item }
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
              onClick={() => this.handleRemoveItem(id, price)}
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
  const { cart } = state.handleItem;

  return { cart };
};

export default connect(mapStateToProps, { removeItem })(CartItem);
