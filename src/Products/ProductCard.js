import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ProductCard extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.setState({ image: true });
  }
  getImageURl = () => {
    const { image, name, id } = this.props;
    if (image === undefined) {
      return (
        <img
          src={"http://placehold.it/700x400"}
          className="card-img-top"
          alt={name}
        />
      );
    } else {
      return <img src={image} className="card-img-top" alt={name} />;
    }
  };
  render() {
    let {
      name,
      description,
      price,
      productClass,
      id,
      product,
      image
    } = this.props;
    name = name.replace(/^\w/, c => c.toUpperCase());
    description = description.replace(/^\w/, c => c.toUpperCase());
    image ? (image = image) : (image = product.image);
    return (
      <div className={`${productClass} card`} style={{ width: "18em" }}>
        {this.getImageURl()}

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p> {price}</p>
          <Link
            to={{
              pathname: `/Products/${id}/show`,
              state: name
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
