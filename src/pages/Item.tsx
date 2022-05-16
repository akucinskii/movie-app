import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Items {
  Title?: string;
  Actors?: string;
  Poster?: string;
  Response?: boolean;
  Plot?: string;
  Released?: string;
  Country?: string;
  Genre?: string;
  Director?: string;
  Runtime?: string;
  Ratings?: {
    Source: string;
    Value: string;
  }[];
}

const Item = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Items>({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async (req: string) => {
      setLoading(true);
      const data: any = await fetch(
        `https://www.omdbapi.com/?apikey=3458304a&t=${req}`
      );
      const items: any = await data.json();
      if (items.Response === "False") {
        alert("No movie found");
        navigate("/");
      } else {
        setData(items);
      }
      setLoading(false);
    };
    if (id) {
      fetchItems(id);
    }
  }, [id, navigate]);
  return (
    <div className="flex w-full h-full justify-center">
      {data.Title == null ? (
        <div className="flex w-full h-screen justify-center items-center text-gray-300 ">
          {loading ? (
            <h1 className="text-xl md:text-3xl lg:text-5xl">Loading..</h1>
          ) : (
            <h1 className="text-xl md:text-3xl lg:text-5xl">
              No movie found...
            </h1>
          )}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row max-w-screen md:max-w-[700px] my-16 md:my-24 m-2 p-1 bg-[#232323] rounded-lg text-white">
          <div className="md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={data.Poster}
              alt=""
            />
          </div>

          <div className="md:ml-2 flex flex-col md:w-1/2 h-full justify-between gap-2">
            <div className="w-full h-fit text-gray-400">
              <span className="text-2xl font-bold text-white">
                {data.Title}
              </span>
              <p>Director: {data.Director}</p>
              <div className="py-1">
                <p className="text-gray-300">Ratings:</p>
                {data.Ratings &&
                  data.Ratings.map((rating, index) => {
                    return (
                      <div key={index}>
                        {rating.Source} - {rating.Value}
                      </div>
                    );
                  })}
              </div>

              <span>Description: {data.Plot}</span>
              <span></span>
            </div>

            <div className="text-gray-400">
              <p className="">
                {data.Genre} {data.Runtime}
              </p>
              <p className="">Country: {data.Country}</p>
              <p className="">Released: {data.Released}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
