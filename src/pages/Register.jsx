// import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

function Register() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Register</h1> <br />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
        <button type="submit">Submit</button>
        <Link to="/login" className="register-link">
          Login
        </Link>
      </div>
      <br />
    </Wrapper>
  );
}

export default Register;
