import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import "./Layout.css";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
