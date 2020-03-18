import React, { Component } from "react";
import FeaturedProducts from "../Products/FeaturedProducts";
import "./home.css";
class Home extends Component {
  state = {};

  render() {
    const { addToCart, isLoggedIn } = this.props;
    return (
      <>
        <header>
          <div
            id="home-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#home-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#home-carousel" data-slide-to="1"></li>
              <li data-target="#home-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item active carousel-item-1"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>50% OFF</h3>

                  <p className="discount">Use code SALETIME for 50% off</p>
                </div>
              </div>
              {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item carousel-item-2"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Got a Product?</h3>
                  <p>Let us help you get is sold for top dollar</p>
                </div>
              </div>
              {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
              <div
                className="carousel-item carousel-item-3"
                style={{
                  backgroundImage: `url("https://placehold.it/1900x1080")`
                }}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>Local Products</h3>
                  <p>All sellers are in your current area</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#home-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#home-carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <div>
          <FeaturedProducts addToCart={addToCart} isLoggedIn={isLoggedIn} />
        </div>
      </>
    );
  }
}

export default Home;
