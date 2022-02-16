import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarLogo from "../atoms/NavBarLogo";
import "./styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <NavBarLogo />
      <button
        className="navbar__button"
        onClick={() => {
          navigate("/all");
        }}
      >
        all
      </button>
      <button
        className="navbar__button"
        onClick={() => {
          navigate("/newest");
        }}
      >
        newest
      </button>
      <button
        className="navbar__button"
        onClick={() => {
          navigate("/popular");
        }}
      >
        popular
      </button>
    </div>
  );
};

export default Navbar;
