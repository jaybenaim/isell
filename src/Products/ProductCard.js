import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ProductCard extends Component {
  state = {
    isLoaded: false,
    qty: 1
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
  render() {
    const { qty } = this.state;
    let {
      name,
      description,
      price,
      productClass,
      id,
      product,
      image,
      addToCart
    } = this.props;
    name = name.replace(/^\w/, c => c.toUpperCase());
    description = description.replace(/^\w/, c => c.toUpperCase());
    !image && (image = product.image);
    return (
      <div className={`${productClass} card`} style={{ width: "18em" }}>
        {this.getImageURl()}

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p> {price}</p>
          <input
            className="qty-input"
            type="number"
            name="quantity"
            min="1"
            max="10"
            placeholder="1"
            ref={this.qtyRef}
            onChange={this.handleSetQty}
          ></input>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(qty, product)}
          >
            Add to cart
          </button>
          <Link
            to={{
              pathname: `/Products/${id}/show`,
              state: { id, name, description, price, image }
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

export default ProductCard;
