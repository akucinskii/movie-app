import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface IItemProps {}

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
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState<Items>({});
  const { res } = useParams();

  const fetchItems = async (req: string) => {
    const data: any = await fetch(
      `https://www.omdbapi.com/?apikey=3458304a&t=${req}`
    );
    const items: any = await data.json();
    console.log(items);
    if (items.Response === "False") {
      alert("No movie found");
      navigate("/");
    } else {
      setData(items);
    }
  };

  useEffect(() => {
    if (res) {
      fetchItems(res);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);
  return (
    <div className="flex w-full h-full justify-center">
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
              <p className="text-md">
                {data.Genre} {data.Runtime}
              </p>
              <span>Description: {data.Plot}</span>
              <span></span>
            </div>
            <div className="text-gray-400">
              <p className="">Country: {data.Country}</p>
              <p className="">Released: {data.Released}</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Item;
