import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import NavBar from "../components/NavBar";
import FormRow from "../components/FormRow";

function Login() {
  return (
    <Wrapper>
      <form className="form">
        <NavBar />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          placeholder="lagbaja@tamedo.co"
          required
        />
        <FormRow
          type="password"
          name="password"
          placeholder="secret"
          required
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the App
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login;
