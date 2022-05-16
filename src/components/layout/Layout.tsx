import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#0f0f0f] w-full h-full">
      <Navbar />
      <div className="flex flex-col justify-between w-full mx-auto min-h-screen">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
