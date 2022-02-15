import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface IItemProps {}

interface Item {
  Title?: string;
  Actors?: string;
  Poster?: string;
  Response?: boolean;
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const [data, setData] = useState<Item>({});
  const { number } = useParams();

  const fetchItems = async (req: any) => {
    const data: any = await fetch(
      `http://www.omdbapi.com/?apikey=3458304a&t=${req}`
    );
    const items: any = await data.json();
    console.log(items);
    if (items.Response === "False") {
      alert("No movie found");
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
