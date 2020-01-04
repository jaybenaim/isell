import React, { Component } from "react";
import featuredProducts from "../Data/featuredProducts";
import ProductCard from "./ProductCard";
import "./featuredProducts.css";

class FeaturedProducts extends Component {
  state = {};
  render() {
    const {
      name: name1,
      description: desc1,
      price: price1
    } = featuredProducts[0];
    const {
      name: name2,
      description: desc2,
      price: price2
    } = featuredProducts[1];
    const {
      name: name3,
      description: desc3,
      price: price3
    } = featuredProducts[2];

    return (
      <div className="featured-products-container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Featured Products</h5>
            <p className="card-text">
              Take an additional 10% when using the code{" "}
              <span className="text-secondary">FREESTUFF </span>
            </p>
            <div className="featured-products-grid">
              <div className="card-1">
                <ProductCard name={name1} description={desc1} price={price1} />
              </div>
              <div className="card-2">
                <ProductCard name={name2} description={desc2} price={price2} />
              </div>
              <div className="card-3">
                <ProductCard name={name3} description={desc3} price={price3} />
              </div>
            </div>
          </div>

          <div className="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;
