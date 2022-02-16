import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../molecules/Navbar";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="bg-[#232323] w-full h-full min-h-screen">
      <Navbar />
      <div className="w-full pt-16 mx-auto bg-[#2b2b2b] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
