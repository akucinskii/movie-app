import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
