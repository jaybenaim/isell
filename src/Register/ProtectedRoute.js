import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function PrivateRoute({ isLoggedIn, children: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          Component
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;

/// create component with alert message to login
