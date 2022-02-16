import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="w-1/2 items-center pr-4 flex-row-reverse h-16 hidden md:flex">
      <div className="md:text-lg lg:text-xl">
        <input
          className="opacity-100 bg-[#232323] active:border-none "
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            console.log(search);
            navigate(`/item/${search}`);
          }}
        >
          <i className="bx bx-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
