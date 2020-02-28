import React, { Component } from "react";
import "./checkoutItem.css";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";
import backend from "../../Api/backend";
class CheckoutItem extends Component {
  state = {};
  handleRemoveItem = (id, price) => {
    const {
      removeItem,
      cart: { items, id: cartID },
      qty
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
        removeItem(res.data);
      })
      .catch(err => {
        alert("Error removing item");
      });
  };
  render() {
    const {
      _id,
      name,
      description,
      price,
      image,
      qty,
      removeItem
    } = this.props;
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
          onClick={() => this.handleRemoveItem(_id, price)}
        >
          X
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cart } = state.handleItem;

  return { cart };
};

export default connect(mapStateToProps, { removeItem })(CheckoutItem);
