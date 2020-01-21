import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Login from "../Register/Login";
import "./protectedRoute.css";

function PrivateRoute({ isLoggedIn, children: Component, ...rest }) {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn
          ? Component
          : showAlert && (
              <>
                <div className="alert alert-danger login-alert" role="alert">
                  Please login first!
                  <button
                    className="btn-danger alert-close-btn"
                    onClick={() => setShowAlert(false)}
                  >
                    X
                  </button>
                </div>
                <Login redirect={true} />
              </>
            )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
