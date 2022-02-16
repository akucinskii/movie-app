import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface IItemProps {}

interface Items {
  Title?: string;
  Actors?: string;
  Poster?: string;
  Response?: boolean;
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState<Items>({});
  const { number } = useParams();

  const fetchItems = async (req: string) => {
    const data: any = await fetch(
      `http://www.omdbapi.com/?apikey=3458304a&t=${req}`
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
    if (number) {
      fetchItems(number);
    }
  }, [number]);
  return (
    <div>
      <p>Item page</p>
      <p>{data.Title}</p>
      <img src={data.Poster} alt="" />
    </div>
  );
};

export default Item;
