import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <h2>Login Page</h2>
      </div>
      <br />
      <div className="container">
        <Link to="/register" className="register-link">
          Register
        </Link>
      </div>
      <br />
    </>
  );
}

export default Login;
