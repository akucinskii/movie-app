import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface IItemProps {}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const [message, setMessage] = useState("");
  const { number } = useParams();

  useEffect(() => {
    if (number) {
      setMessage("the number is" + number);
    } else {
      setMessage("error");
    }
  }, []);
  return (
    <div>
      <p>Item page</p>
      <p>{message}</p>
    </div>
  );
};

export default Item;
