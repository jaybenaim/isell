import React, { Component } from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Products from "../Products/Products";
import { createBrowserHistory } from "history";
import Home from "../Home/Home";
import ProductShow from "../Products/ProductShow";
import Cart from "../Cart/Cart";
import Login from "../Register/Login";
import Signup from "../Register/Signup";
import "./App.css";
import Cookies from "js-cookie";
import ProtectedRoute from "../Register/ProtectedRoute";
import ProfileForm from "../Profile/ProfileForm";
import local from "../../Api/local";
import { connect } from "react-redux";
import { createCart, getCart } from "../../redux/actions";

const history = createBrowserHistory();
const { token } = Cookies.get();

class App extends Component {
  state = {
    isLoggedIn: token === undefined ? false : true,
    selectedProduct: null,
    addedToCart: false,
    valid: false,
    showAlert: false
  };

  setSelectedProduct = product => {
    this.setState({ selectProduct: product });
  };
  toggleAlert = () => {
    const { showAlert } = this.state;
    this.setState({ showAlert: !showAlert });
  };
  handleLogin = token => {
    this.setState({
      isLoggedIn: token ? true : false
    });
  };
  getCart = async id => {
    await local
      .get(`/carts/find/${id}`)
      .then(res => {
        this.props.getCart(res.data);
      })
      .catch(err => {
        alert("Error getting cart", err);
      });
  };
  componentDidMount() {
    const id = Cookies.get("id");
    this.getCart(id);
  }
  render() {
    const { showAlert, isLoggedIn } = this.state;

    return (
      <Router basename="/isell" history={history}>
        <div className="App">
          <Nav isLoggedIn={isLoggedIn} handleLogin={this.handleLogin} />

          {showAlert && (
            <div className="alert alert-danger" role="alert">
              <button
                className="btn-danger alert-close-btn"
                onClick={() => this.toggleAlert()}
              >
                X
              </button>
              <br />
              YOU ALREADY ADDED THIS ITEM TO YOUR CART!
              <br />
              <em>Check your cart for multiples</em>
              <br />
            </div>
          )}
          {/* <Link to={{ pathname: "/profiles/new", state: { text: "hello" } }}>
            NEW PROFILE
          </Link> */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                {/* grab add from redux in home */}
                <Home isLoggedIn={isLoggedIn} />
              </Route>
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} handleLogin={this.handleLogin} />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup {...props} handleLogin={this.handleLogin} />
                )}
              />

              <Route
                exact
                path="/Products"
                render={props => (
                  <Products
                    {...props}
                    removeFromCart={this.removeFromCart}
                    selectProduct={this.setSelectedProduct}
                  />
                )}
              />

              <Route
                exact
                path="/Products/:id/Show"
                component={ProductShow}
                render={props => <ProductShow {...props} />}
              />

              <ProtectedRoute path="/ShoppingCart" isLoggedIn={isLoggedIn}>
                <Route
                  exact
                  path="/ShoppingCart"
                  component={Cart}
                  render={props => (
                    <Cart
                      {...props}
                      timestamp={new Date().toString()}
                      removeFromCart={this.removeFromCart}
                      // items={items}
                    />
                  )}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/profiles/new" isLoggedIn={isLoggedIn}>
                <Route
                  exact
                  path="/profiles/new"
                  render={props => <ProfileForm {...props} />}
                />
              </ProtectedRoute>
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
const mapStateToProps = state => {
  const { cart, user } = state.handleItem;

  return { cart, user };
};

export default connect(mapStateToProps, { createCart, getCart })(App);
