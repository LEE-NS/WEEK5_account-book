import React, { useState } from "react";
import styled from "styled-components";

const AccountMonthBtn = ({ key, month, setMonth, expenses, setExpenses }) => {
  const [clicked, setClicked] = useState(false);

  const localStorageExpenses = JSON.parse(
    window.localStorage.getItem("expenses")
  );

  const getMonthlyExpenses = (monthNum) => {
    const monthlyExpenses = localStorageExpenses.filter(
      (expense) =>
        expense.date.split("-")[1] === String(monthNum).padStart(2, "0")
    );
    setExpenses(monthlyExpenses);
    setMonth(monthNum);
    setClicked(!clicked);
  };

  return (
    <StLi $isClicked={clicked}>
      <StButton onClick={() => getMonthlyExpenses(monthNum)}>
        {monthNum}월
      </StButton>
    </StLi>
  );
};

export default AccountMonthBtn;

const StLi = styled.li`
  border-radius: 10px;
  background-color: ${(props) => (props.$isClicked ? "#c4c4c4" : "#ececec")};
  &:hover {
    background-color: #c4c4c4;
  }
`;
const StButton = styled.button`
  width: 125px;
  padding: 15px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
