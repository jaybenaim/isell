import React, { Component } from "react";
import featuredProducts from "../../Data/featuredProducts";
import ProductCard from "./ProductCard";
import "./featuredProducts.css";

class FeaturedProducts extends Component {
  state = {};
  render() {
    const { addToCart, isLoggedIn, hideDeal } = this.props;
    return (
      <div className="featured-products-container">
        <div className="card text-center">
          {!hideDeal && (
            <div className="card-header">
              <h5 className="card-title">Featured Products</h5>
              <p className="card-text">
                Take an additional 10% when using the code{" "}
                <span className="text-secondary">FREESTUFF </span>
                <br />
              </p>
            </div>
          )}

          <div className="card-body">
            <div className="featured-products-grid">
              <div className="card-1">
                <ProductCard
                  {...featuredProducts[0]}
                  product={featuredProducts[0]}
                  productClass={`product-card-1 product-card`}
                  addToCart={addToCart}
                  isLoggedIn={isLoggedIn}
                />
              </div>
              <hr />
              <div className="card-2">
                <ProductCard
                  {...featuredProducts[1]}
                  product={featuredProducts[1]}
                  productClass={`product-card-2 product-card`}
                  addToCart={addToCart}
                  isLoggedIn={isLoggedIn}
                />
              </div>
              <hr />

              <div className="card-3">
                <ProductCard
                  {...featuredProducts[2]}
                  product={featuredProducts[2]}
                  productClass={`product-card-3 product-card`}
                  addToCart={addToCart}
                  isLoggedIn={isLoggedIn}
                />
              </div>
            </div>
          </div>
          {!hideDeal ? (
            <div className="card-footer text-muted">All Products</div>
          ) : (
            <div className="card-footer text-muted">2 days ago</div>
          )}
        </div>
      </div>
    );
  }
}

export default FeaturedProducts;
