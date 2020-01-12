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
            <p>
              <a
                href={image}
                role="button"
                class="btn btn-secondary popover-test"
                title="Popover title"
                data-content={`${description}`}
              >
                {name}
              </a>
            </p>
            {price} <span>X</span>
          </div>
        )}
      </>
    );
  }
}

export default CartItem;
