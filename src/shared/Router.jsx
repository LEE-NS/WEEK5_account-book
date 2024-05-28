import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = ({ month, setMonth, expenses, setExpenses }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              month={month}
              setMonth={setMonth}
              expenses={expenses}
              setExpenses={setExpenses}
            />
          }
        />
        <Route
          path="detail/:id"
          element={<Detail expenses={expenses} setExpenses={setExpenses} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
