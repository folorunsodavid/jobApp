import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  if (error.status === 404)
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oh! Something went wrong.</h3>
          <p>The page you are loking for is not found. </p>
          <Link to="/dashboard">back to Dashboard</Link>
        </div>
      </Wrapper>
    );
  return (
    <Wrapper>
      <h3>Oh! Something went wrong.</h3>
    </Wrapper>
  );
};

export default Error;
