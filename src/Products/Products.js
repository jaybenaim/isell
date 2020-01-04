import React, { Component } from "react";
import FeaturedProducts from "./FeaturedProducts";
import products from "../Data/products";
import ProductCard from "./ProductCard";
import "./products.css";
class Products extends Component {
  state = {};
  render() {
    let productList = products.map((product, i) => {
      const { id, name, description, price } = product;
      return (
        <ProductCard
          key={i}
          id={id}
          name={name}
          description={description}
          price={price}
          productClass={`product-card-${id}`}
        />
      );
    });
    return (
      <div>
        <FeaturedProducts />
        <div className="product-container">{productList}</div>
      </div>
    );
  }
}

export default Products;
