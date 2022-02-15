import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Home page</p>
      <Link to="/newest">OKAYOKAY</Link>
      <button onClick={() => navigate("layout/55")}>
        Go to layout with a number
      </button>
    </div>
  );
};

export default Home;
