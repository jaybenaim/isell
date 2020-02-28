import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import backend from "../../Api/backend";
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
      cart: { id, items }
    } = this.props;
    const productQty = { qty: qtyRef };

    let itemIds = items.map(item => item._id);
    itemIds.push(product._id);

    const data = {
      products: [...itemIds]
    };
    if (qtyRef > 1) {
      backend.patch(`/products/${product._id}`, productQty, {}).then(res => {
        console.log(res.statusText, "Product updated");
      });
    }

    backend
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
  render() {
    const { showDesc } = this.state;
    let {
      _id,
      name,
      description,
      price,
      productClass,
      product,
      image,
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

          <br />
          <Link
            to={{
              pathname: `/products/${_id}/show`,
              state: {
                _id,
                name,
                description,
                price,
                image,
                isLoggedIn,
                product
              }
            }}
            className="btn btn-primary show-product-btn"
          >
            <span>CAD ${price}</span>
          </Link>
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
  ProductCard
);
