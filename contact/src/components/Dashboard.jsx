import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Dashboard;
