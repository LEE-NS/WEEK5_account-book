import React, { useState } from "react";
import styled from "styled-components";
import AccountMonthItem from "./AccountMonthItem";

const date = new Date();

const AccountMonth = ({ month, setMonth }) => {
  return (
    <StMonthWrap>
      <StUl>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((monthNum) => (
          <AccountMonthItem
            key={monthNum}
            monthNum={monthNum}
            month={month}
            setMonth={setMonth}
          />
        ))}
      </StUl>
    </StMonthWrap>
  );
};

export default AccountMonth;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StMonthWrap = styled.div`
  width: 800px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 17px;
  background-color: #fefefe;
`;
const StUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

/* 스타일 이외의 로직만 수도 코드로 기록하고 나머지 모두 삭제 */
