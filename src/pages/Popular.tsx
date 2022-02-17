import React from "react";
import Cards from "../components/organisms/Cards";
import { movies } from "../data/MostPopular";

export interface IPopularProps {}

const Popular: React.FunctionComponent<IPopularProps> = (props) => {
  return (
    <div className="flex justify-center h-full">
      <div className="mt-20">
        <h1 className="text-4xl text-white text-center italic mb-2">
          Most popular:
        </h1>
        <Cards movies={movies} />
      </div>
    </div>
  );
};

export default Popular;
