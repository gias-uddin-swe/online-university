import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

// import { userContext } from "../Home/Home/Home";
// import { userContext } from "./../Home/Home/Home";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("email") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
