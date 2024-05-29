import React, { useState } from "react";
import styled from "styled-components";

const AccountMonthItem = ({ monthNum, setMonth }) => {
  const totalSetMonth = (monthNum) => {
    localStorage.setItem("selectedMonth", monthNum);
    setMonth(monthNum);
  };

  return (
    <li>
      <StButton
        $isClicked={monthNum === +localStorage.getItem("selectedMonth")}
        onClick={() => {
          totalSetMonth(monthNum);
        }}
      >
        {monthNum}월
      </StButton>
    </li>
  );
};

export default AccountMonthItem;

const StButton = styled.button`
  width: 125px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: ${(props) => (props.$isClicked ? "#c4c4c4" : "#ececec")};

  &:hover {
    transition: background-color 0.2s;
    background-color: #c4c4c4;
  }
`;
