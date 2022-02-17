import React from "react";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="">
      <div className="w-full h-[32rem] bg-black relative">
        <img
          className="w-full h-full object-cover lg:object-top"
          src="https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className="w-full bottom-0 h-10 absolute bg-gradient-to-t from-[#2b2b2b] to-transparent"></div>
      </div>
      <h1 className="w-full text-center text-4xl text-white text-">
        We recommend:
      </h1>
    </div>
  );
};

export default Home;
