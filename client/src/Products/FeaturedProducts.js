import React, { Component } from "react";
import featuredProducts from "../Data/featuredProducts";
import ProductCard from "./ProductCard";
import "./featuredProducts.css";

class FeaturedProducts extends Component {
  state = {};
  render() {
    const { addToCart } = this.props;
    return (
      <div className="featured-products-container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Featured Products</h5>
            <p className="card-text">
              Take an additional 10% when using the code{" "}
              <span className="text-secondary">FREESTUFF </span>
              <br />
              NOT A REAL ECOMMERCE SITE DO NOT TRY TO PURCHASE
            </p>
            <div className="featured-products-grid">
              <div className="card-1">
                <ProductCard
                  {...featuredProducts[0]}
                  product={featuredProducts[0]}
                  productClass={`product-card-${featuredProducts[0].id} product-card`}
                  addToCart={addToCart}
                />
              </div>
              <div className="card-2">
                <ProductCard
                  {...featuredProducts[1]}
                  product={featuredProducts[1]}
                  productClass={`product-card-${featuredProducts[1].id} product-card`}
                  addToCart={addToCart}
                />
              </div>
              <div className="card-3">
                <ProductCard
                  {...featuredProducts[2]}
                  product={featuredProducts[2]}
                  productClass={`product-card-${featuredProducts[2].id} product-card`}
                  addToCart={addToCart}
                />
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