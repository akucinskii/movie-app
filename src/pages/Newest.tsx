import React, { useEffect, useState } from "react";
import Cards from "../components/organisms/Cards";

const Newest = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    fetch("https://flaskwidelo.herokuapp.com/new").then((response) =>
      response.json().then((data) => {
        setMovies(data);
      })
    );
  }, []);
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
