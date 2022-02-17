import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarLogo = () => {
  const navigate = useNavigate();

  return (
    <button
      className="md:text-3xl text-xl transition-all 0.3s hover:scale-105 hover:underline text-purple-800"
      onClick={() => {
        navigate("/");
      }}
    >
      Widelo
    </button>
  );
};

export default NavBarLogo;
