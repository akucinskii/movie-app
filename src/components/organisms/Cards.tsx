import React from "react";
import { movies } from "../../data/data";
import Card from "../molecules/Card";

const Cards = () => {
  return (
    <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative 2xl:grid-cols-7 gap-4">
      {movies.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
};

export default Cards;
