import React from "react";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <nav className="container nav">
      <img src={logo} alt="Jobify" />
    </nav>
  );
};

export default NavBar;
