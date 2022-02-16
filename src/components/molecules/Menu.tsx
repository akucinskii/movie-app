import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex align-center">
      <button
        className="md:hidden absolute top-3 left-4 text-3xl"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <i className="text-cent bx bx-menu"></i>
      </button>
      <div
        className={`absolute ${
          menuVisible ? "" : "hidden"
        } flex flex-col top-0 m-12 left-0 right-0 mx-auto border-b border-[#2b2b2b] bg-[#232323] bg-opacity-75 w-full gap-4 p-2 px-8 transition-all`}
      >
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl text- hover:text-white"
          onClick={() => {
            navigate("/all");
          }}
        >
          All movies
        </button>
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl hover:text-white"
          onClick={() => {
            navigate("/newest");
          }}
        >
          Newest movies
        </button>
        <button
          className="md:hidden transition-all 0.3s hover:scale-105 lg:text-xl hover:text-white"
          onClick={() => {
            navigate("/popular");
          }}
        >
          Most popular
        </button>
      </div>
    </div>
  );
};

export default Menu;
