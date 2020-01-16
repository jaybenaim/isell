import React, { Component } from "react";

class ProductShow extends Component {
  state = {};
  getImageOr404 = (image, name) => {
    if (image === undefined) {
      return (
        <img
          src={"https://placehold.it/700x400"}
          className="card-img-top"
          alt="none"
        />
      );
    } else {
      return <img src={image} className="card-img-top" alt={name} />;
    }
  };
  render() {
    const { name, description, price, image, id } = this.props.location.state;

    return (
      <div className="container">
        <h1 className="mt-4 mb-3">
          <small> {name}</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/isell">Home</a>
          </li>
          <li className="breadcrumb-item active">{name}</li>
        </ol>

        <div className="row">
          <div className="col-md-8">{this.getImageOr404(image, name)}</div>

          <div className="col-md-4">
            <h3 className="my-3">Project Description</h3>
            <p>{description}</p>

            <h3 className="my-3">${price}</h3>
          </div>
        </div>

        <h3 className="my-4">Related Projects</h3>

        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid"
                src="https://placehold.it/500x300"
                alt={name}
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid"
                src="https://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid"
                src="https://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <a href={image}>
              <img
                className="img-fluid"
                src="https://placehold.it/500x300"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShow;
