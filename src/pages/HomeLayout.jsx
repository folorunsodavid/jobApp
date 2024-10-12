import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="container">
      {/* <h2>HomeLayout</h2> */}
      <Outlet />
    </div>
  );
};

export default HomeLayout;
