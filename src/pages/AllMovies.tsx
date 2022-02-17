import React from "react";
import Cards from "../components/organisms/Cards";
import { movies } from "../data/data";
export interface IAllMoviesProps {}

const AllMovies: React.FunctionComponent<IAllMoviesProps> = (props) => {
  return (
    <div className="flex justify-center align-center h-full">
      <div className="mt-20">
        <Cards movies={movies} />
      </div>
    </div>
  );
};

export default AllMovies;
