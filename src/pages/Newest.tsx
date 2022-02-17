import React from "react";
import Cards from "../components/organisms/Cards";
import { movies } from "../data/newMovies";
export interface INewestProps {}

const Newest: React.FunctionComponent<INewestProps> = (props) => {
  return (
    <div className="flex justify-center h-full">
      <div className="mt-20">
        <h1 className="text-4xl text-white text-center italic mb-2">
          Newest Movies:
        </h1>
        <Cards movies={movies} />
      </div>
    </div>
  );
};

export default Newest;
