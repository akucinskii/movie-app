import React from "react";
import { Outlet } from "react-router-dom";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div
      className="layout"
      style={{
        border: 2,
        borderStyle: "dashed",
        margin: 5,
        width: 500,
        height: 500,
        borderColor: "black",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
