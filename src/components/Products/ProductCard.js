import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import local from "../../Api/local";
import {
  addItem as addItemToCart,
  removeItem as removeItemFromCart
} from "../../redux/actions";
class ProductCard extends Component {
  state = {
    isLoaded: false,
    showDesc: false,
    qty: 1,
    addToCartButtonText: "Add to cart",
    addToCartButtonDisabled: false
  };
  shortDescription = description => {
    if (description.length <= 15) {
      return description;
    } else {
      return description.slice(0, 15) + "...";
    }
  };
  showDescription = () => {
    const { showDesc } = this.state;
    this.setState({ showDesc: !showDesc });
  };
  componentDidMount() {
    this.setState({ image: true });
  }
  handleSetQty = event => {
    let qty = Number(event.target.value);
    this.setState({ qty: qty });
  };

  getImageURl = () => {
    const { image, name } = this.props;
    if (image === undefined) {
      return (
        <img
          src={"https://placehold.it/700x400"}
          className="card-img-top"
          alt={name}
        />
      );
    } else {
      return <img src={image} className="card-img-top" alt="none" />;
    }
  };
  handleAddProduct = (qtyRef, product) => {
    const {
      addItemToCart: addItem,
      cart: { items, qty }
    } = this.props;
    const data = { user: qty };
    local.post("/carts", data, {}).then(res => {
      this.props.createCart(res.data);
    });

    addItem(qty, product);

    this.setState({
      addToCartButtonText: "Added to cart",
      addToCartButtonDisabled: true
    });
  };
  render() {
    const {
      qty,
      showDesc,
      addToCartButtonText,
      addToCartButtonDisabled
    } = this.state;
    let {
      name,
      description,
      price,
      productClass,
      id,
      product,
      image,
      addToCart,
      isLoggedIn
    } = this.props;
    name = name.replace(/^\w/, c => c.toUpperCase());
    description = description.replace(/^\w/, c => c.toUpperCase());
    !image && (image = product.image);
    return (
      <div className={`${productClass} card`}>
        {this.getImageURl()}

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text" onClick={() => this.showDescription()}>
            {showDesc ? description : this.shortDescription(description)}
          </p>
          <p>CAD ${price}</p>
          <label htmlFor="qty-integer">Qty: </label>
          <input
            className="qty-input"
            type="number"
            name="quantity"
            min="1"
            max="10"
            placeholder="1"
            ref={this.qtyRef}
            onChange={this.handleSetQty}
            disabled={addToCartButtonDisabled}
          ></input>
          {/* <button onClick={() => addToCart(qty, product)}>Add to cart</button> */}
          <button
            disabled={addToCartButtonDisabled}
            className="add-to-cart-btn "
            onClick={() => this.handleAddProduct(qty, product)}
          >
            {addToCartButtonText}
          </button>
          <Link
            to={{
              pathname: `/Products/${id}/show`,
              state: { id, name, description, price, image, isLoggedIn }
            }}
            className="btn btn-primary"
          >
            Show Details
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { totalCostBeforeTax } = state.handleItem;
  const { cart, user } = state.createCart;
  return { cart, totalCostBeforeTax, user };
};

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(
  ProductCard
);
