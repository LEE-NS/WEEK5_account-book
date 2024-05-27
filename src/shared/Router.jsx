import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = ({ month, setMonth }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home month={month} setMonth={setMonth} />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
