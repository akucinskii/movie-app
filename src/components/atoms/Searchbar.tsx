import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="w-1/2 items-center pr-4 flex-row-reverse h-16 hidden md:flex relative ">
      <div className="md:text-lg lg:text-xl bg-[#232323] p-1 rounded-lg">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            navigate(`/item/${search}`);
          }}
        >
          <input
            className=" bg-inherit group-hover:text-inherit"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
