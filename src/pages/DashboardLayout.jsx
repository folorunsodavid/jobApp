import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { SmallSidebar, BigSidebar, NavBar2 } from "../components";

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />,
        <BigSidebar />
        <div>
          <NavBar2 />,
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashboardLayout;
