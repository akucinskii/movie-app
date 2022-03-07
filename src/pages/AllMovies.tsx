import React, { useEffect, useState } from "react";
import Cards from "../components/organisms/Cards";

export interface IAllMoviesProps {}

const AllMovies: React.FunctionComponent<IAllMoviesProps> = (props) => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://flaskwidelo.herokuapp.com/all").then((response) =>
      response.json().then((data) => {
        setMovies(data);
      })
    );
  }, []);
  return (
    <div className="flex justify-center align-center h-full">
      <div className="mt-20">
        <Cards movies={movies} />
      </div>
    </div>
  );
};

export default AllMovies;
