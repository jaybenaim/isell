import React, { Component } from "react";
class ProductCard extends Component {
  state = {};
  render() {
    let { name, description, price, productClass } = this.props;
    name = name.replace(/^\w/, c => c.toUpperCase());
    description = description.replace(/^\w/, c => c.toUpperCase());
    return (
      <div className={`${productClass} card`} style={{ width: "18em" }}>
        <img
          src="http://placehold.it/700x400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p> {price}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default ProductCard;
