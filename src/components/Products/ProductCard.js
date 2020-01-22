import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem as addItemToCart } from "../../redux/actions";

class ProductCard extends Component {
  state = {
    isLoaded: false,
    showDesc: false,
    qty: 1
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
  render() {
    const { qty, showDesc } = this.state;
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
          ></input>
          {/* <button onClick={() => addToCart(qty, product)}>Add to cart</button> */}
          <button
            className="add-to-cart-btn"
            onClick={() => this.props.addItemToCart(qty, product)}
          >
            Add to cart
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

const mapStateToProps = (state, ownProps) => {
  const cart = { items: state.items, qty: state.qty };
  return { cart };
};

export default connect(mapStateToProps, { addItemToCart })(ProductCard);
