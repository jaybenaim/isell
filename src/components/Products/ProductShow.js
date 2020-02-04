import React, { Component } from "react";
import local from "../../Api/local";
import { connect } from "react-redux";
import {
  addItem as addItemToCart,
  removeItem as removeItemFromCart
} from "../../redux/actions";
class ProductShow extends Component {
  state = {
    qty: 1,
    addToCartButtonText: "Add to cart",
    addToCartButtonDisabled: false
  };
  getImageOr404 = (image, name) => {
    if (image === undefined) {
      return (
        <img
          src={"https://placehold.it/700x400"}
          className="card-img-top"
          alt="none"
        />
      );
    } else {
      return <img src={image} className="card-img-top" alt={name} />;
    }
  };
  handleAddProduct = (qtyRef, product) => {
    const {
      addItemToCart: addItem,
      cart: { id, items }
    } = this.props;
    const productQty = { qty: qtyRef };

    let itemIds = items.map(item => item._id);
    itemIds.push(product._id);

    const data = {
      products: [...itemIds]
    };
    if (qtyRef > 1) {
      local.patch(`/products/${product._id}`, productQty, {}).then(res => {
        console.log(res.statusText, "Product updated");
      });
    }

    local
      .patch(`/carts/${id}`, data, {})
      .then(res => {
        console.log(res.data + "Item added");
        addItem(qtyRef, product);
      })
      .catch(err => {
        alert("Error adding item");
      });

    this.setState({
      addToCartButtonText: "Added to cart",
      addToCartButtonDisabled: true
    });
  };
  handleSetQty = event => {
    let qty = Number(event.target.value);
    this.setState({ qty: qty });
  };
  render() {
    const {
      name,
      description,
      price,
      image,
      id,
      product
    } = this.props.location.state;
    const { addToCartButtonDisabled, addToCartButtonText, qty } = this.state;

    return (
      <div className="container">
        <h1 className="mt-4 mb-3">
          <small> {name}</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/isell">Home</a>
          </li>
          <li className="breadcrumb-item active">{name}</li>
        </ol>

        <div className="row">
          <div className="col-md-8">{this.getImageOr404(image, name)}</div>

          <div className="col-md-4">
            <h3 className="my-3">Product Description</h3>
            <p>{description}</p>

            <h3 className="my-3"> CAD ${price}</h3>
            <div>
              <label htmlFor="qty-integer">Qty: </label>

              <input
                className="qty-input"
                type="number"
                name="quantity"
                min="1"
                max="100"
                placeholder="1"
                ref={this.qtyRef}
                onChange={this.handleSetQty}
                disabled={addToCartButtonDisabled}
              ></input>
              <button
                disabled={addToCartButtonDisabled}
                className="add-to-cart-btn "
                onClick={() => this.handleAddProduct(qty, product)}
              >
                {addToCartButtonText}
              </button>
            </div>
          </div>
        </div>

        <h3 className="my-4">Related Products</h3>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid related-images"
                src="https://jaybenaim.github.io/isell/images/img8.jpg"
                alt={name}
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid related-images"
                src="https://jaybenaim.github.io/isell/images/img3.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid related-images"
                src="https://jaybenaim.github.io/isell/images/img2.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid related-images"
                src="https://jaybenaim.github.io/isell/images/img1.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { totalCostBeforeTax, cart, user } = state.handleItem;

  return { totalCostBeforeTax, cart, user };
};

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(
  ProductShow
);
