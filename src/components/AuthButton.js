import React from "react";
import { withRouter } from "react-router-dom";
import Auth from "./Auth";

const AuthButton = withRouter(
  ({ history }) =>
    Auth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => Auth.logout(history)}
        >
          Logout
        </button>
      </p>
    ) : (
      <p>You are not logged in.
        <button
          onClick={() => history.push('/login')}
        >
          Login
        </button>
      </p>
    )
);

export default AuthButton;