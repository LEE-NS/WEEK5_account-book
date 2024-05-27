import React, { useState } from "react";
import styled from "styled-components";

const AccountMonthItem = ({ monthNum, setMonth }) => {
  const [isClickedMonth, setActiveMonth] = useState(null);
  const totalSetMonth = (monthNum) => {
    window.localStorage.setItem("selectedMonth", monthNum);
    setMonth(monthNum);
    setActiveMonth(monthNum);
  };

  return (
    <li>
      <StButton
        $isClicked={isClickedMonth === monthNum}
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

  background-color: ${(props) => (props.$isClicked ? "#49921f" : "#ff0000")};

  &:hover {
    background-color: ${(props) => (props.$isClicked ? "#b9b9b9" : "#7e5050")};
  }
`;
