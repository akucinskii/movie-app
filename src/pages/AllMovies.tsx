import React from "react";
import Cards from "../components/organisms/Cards";
export interface IAllMoviesProps {}

const AllMovies: React.FunctionComponent<IAllMoviesProps> = (props) => {
  return (
    <div className="flex justify-center align-center h-full">
      <Cards />
    </div>
  );
};

export default AllMovies;
