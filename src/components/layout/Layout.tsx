import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../molecules/Navbar";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="bg-[#232323] w-full h-full min-h-screen">
      <Navbar />
      <div className="w-full mx-auto bg-[#0f0f0f] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
