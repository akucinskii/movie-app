import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
