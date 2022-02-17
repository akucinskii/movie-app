import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/item/${data.Title}`);
      }}
      className="w-[200px] h-[260px] group z-10 hover:scale-105 transition-all 0.3s "
    >
      <img
        src={data.Poster}
        alt={data.Title}
        className="w-full h-full object-fill"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-[200px] h-[80px] transition-all ease-in p-2 group-hover:block hidden">
        <p className="absolute bottom-0 left-0 p-2 text-l hidden group-hover:block text-white">
          {data.Title}
        </p>
      </div>
    </button>
  );
};

export default Card;
