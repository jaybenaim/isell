import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../Register/Login";
import "./protectedRoute.css";

function PrivateRoute({
  isLoggedIn,
  handleLogin,
  children: Component,
  ...rest
}) {
  const [showAlert, setShowAlert] = useState(true);
  if (isLoggedIn === undefined) {
    isLoggedIn = false;
  }
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          Component
        ) : showAlert ? (
          <>
            <div className="alert alert-danger login-alert" role="alert">
              Please login first!
              <button
                className="btn-success alert-close-btn"
                onClick={() => setShowAlert(false)}
              >
                X
              </button>
            </div>
          </>
        ) : (
          <Login redirect={true} handleLogin={handleLogin} />
        )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
