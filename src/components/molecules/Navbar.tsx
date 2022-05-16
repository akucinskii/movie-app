import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarLogo from "../atoms/NavBarLogo";
import Searchbar from "../atoms/Searchbar";
import Menu from "./Menu";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);

  function handleWindowSizeChange() {
    setMenuVisible(false);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <div
      className={`fixed flex max-h-min pb-1 w-full  text-[#b0b0b0] ${
        menuVisible ? "bg-black" : "bg-gradient-to-b from-[black]"
      } group hover:bg-black to-transparent z-50`}
    >
      <div className="flex justify-center p-4 w-full md:w-1/2 md:gap-4 items-center px-4 relative">
        <NavBarLogo />
        <Menu setMenuVisible={setMenuVisible} menuVisible={menuVisible} />
        <button
          className="hidden md:block transition-all 0.3s hover:scale-105 lg:text-lg hover:text-white"
          onClick={() => {
            navigate("/all");
          }}
        >
          All movies
        </button>
        <button
          className="hidden md:block transition-all 0.3s hover:scale-105 lg:text-lg hover:text-white"
          onClick={() => {
            navigate("/newest");
          }}
        >
          Newest movies
        </button>
        <button
          className="hidden md:block transition-all 0.3s hover:scale-105 lg:text-lg hover:text-white"
          onClick={() => {
            navigate("/popular");
          }}
        >
          Most popular
        </button>
      </div>
      <Searchbar />
    </div>
  );
};

export default Navbar;
