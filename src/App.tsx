import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMovies from "./pages/AllMovies";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Newest from "./pages/Newest";
import Popular from "./pages/Popular";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllMovies />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="item" element={<Item />}>
            <Route index element={<Item />}></Route>
            <Route path=":id" element={<Item />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
