import React, { Component } from "react";
import FeaturedProducts from "./FeaturedProducts";
import products from "../Data/products";
import ProductCard from "./ProductCard";
import "./products.css";
class Products extends Component {
  state = {};
  render() {
    const { addToCart } = this.props;
    let productList = products.map((product, i) => {
      const { id, image: url } = product;
      if (product.image === undefined) {
        return;
      } else {
        return (
          <ProductCard
            key={i}
            {...product}
            product={product}
            url={url}
            productClass={`product-card-${id} product-card`}
            addToCart={addToCart}
          />
        );
      }
    });
    return (
      <div>
        <FeaturedProducts addToCart={addToCart} />
        <div className="product-container">{productList}</div>
      </div>
    );
  }
}

export default Products;