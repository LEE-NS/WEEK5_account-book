import React, { useState } from "react";
import Router from "./shared/Router";
import styled from "styled-components";
import { AccountContext } from "./context/AccountContext";

const date = new Date();

const App = () => {
  const [month, setMonth] = useState(() => {
    if (localStorage.getItem("selectedMonth")) {
      return localStorage.getItem("selectedMonth").padStart(2, "0");
    } else {
      const init = date.getMonth() + 1;
      localStorage.setItem("selectedMonth", JSON.stringify(init));
      return init;
    }
  });

  const [expenses, setExpenses] = useState(() => {
    if (localStorage.getItem("expenses")) {
      return JSON.parse(localStorage.getItem("expenses"));
    } else {
      return [
        {
          id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
          date: "2024-05-05",
          money: "100,000",
          category: "식비",
          job: "세광양대창",
        },
        {
          id: "25600f72-53b4-4187-a9c2-47358580e2f8",
          date: "2024-05-10",
          money: "40,500",
          category: "도서",
          job: "모던 자바스크립트",
        },
        {
          id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
          date: "2024-05-02",
          money: "50,000",
          category: "식비",
          job: "회식",
        },
        {
          id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
          date: "2024-06-02",
          money: "500",
          category: "간식",
          job: "아이스크림",
        },
        {
          id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
          date: "2024-06-02",
          money: "1,055,000",
          category: "여행",
          job: "일본여행",
        },
        {
          id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
          date: "2024-06-09",
          money: "155,000",
          category: "미용",
          job: "미용실",
        },
        {
          id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
          date: "2024-06-12",
          money: "75,000",
          category: "도서도서도서도서도서도서도서도서",
          job: "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
        },
      ];
    }
  });

  return (
    <Wrap>
      <AccountContext.Provider
        value={{ month, setMonth, expenses, setExpenses }}
      >
        <Router />
      </AccountContext.Provider>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;
