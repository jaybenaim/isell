import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../Products/Products";
import { createBrowserHistory } from "history";
import Home from "../Home/Home";
import ProductShow from "../Products/ProductShow";
import Cart from "../Cart/Cart";
import "./App.css";
import Product from "../Data/productSchema";

const history = createBrowserHistory();
class App extends Component {
  state = {
    cartQty: 0,
    cartItems: [],
    selectedProduct: null
  };
  addToCart = (qty, item) => {
    const { id, name, description, price, image } = item;

    const items = [];
    for (let i = 1; i <= qty; i++) {
      items.push(new Product(id + 1, name, description, price, image));
    }
    if (qty === 0 || qty === undefined || qty === "0") {
      qty = 1;
    }
    this.setState(prevState => {
      return {
        cartQty: (prevState.cartQty += qty),
        cartItems: [...prevState.cartItems, ...items]
      };
    });
  };
  setSelectedProduct = product => {
    this.setState({ selectProduct: product });
  };
  render() {
    const { cartItems, cartQty } = this.state;
    return (
      <Router basename="/isell" history={history}>
        <div className="App">
          <Nav cart={{ qty: cartQty, items: cartItems }} />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home addToCart={this.addToCart} />
              </Route>
              <Route exact path="/Products">
                <Products
                  addToCart={this.addToCart}
                  selectProduct={this.setSelectedProduct}
                  history={history}
                />
              </Route>
              <Route
                exact
                path="/Products/:id/Show"
                component={ProductShow}
                render={props => (
                  <ProductShow {...props} addToCart={this.addToCart} />
                )}
              />
              <Route
                exact
                path="/ShoppingCart"
                component={Cart}
                render={props => <Cart {...props} />}
              />
            </Switch>
          </div>
          {/* <!-- Footer --> */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">
                Copyright &copy; Your Website 2019 NOT A REAL ECOMMERCE SITE DO
                NOT TRY TO PURCHASE
              </p>
            </div>
            {/* <!-- /.container --> */}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
