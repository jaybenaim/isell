import React from "react";
import "./App.css";
import Nav from "../Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "../Products/Products";
import Home from "../Home/Home";
import "./App.css";

function App() {
  return (
    <Router basename="/isell">
      <div classNameName="App">
        <Nav />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Products">
              <Products />
            </Route>
          </Switch>
        </div>
        {/* <!-- Footer --> */}
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2019
            </p>
          </div>
          {/* <!-- /.container --> */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
