import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="bg-[#0f0f0f] w-full h-full">
      <Navbar />
      <div className="w-full mx-auto min-h-screen">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
