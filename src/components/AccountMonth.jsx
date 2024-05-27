import React, { useState } from "react";
import styled from "styled-components";
import AccountSection from "./AccountSection";
import AccountForm from "./AccountForm";
import AccountMonthBtn from "./AccountMonthBtn";

const date = new Date();

const AccountMonth = ({ expenses, setExpenses }) => {
  const [month, setMonth] = useState(date.getMonth() + 1);

  return (
    <StWrap>
      <AccountForm
        expenses={expenses}
        setExpenses={setExpenses}
        month={month}
        setMonth={setMonth}
      />
      <StMonthWrap>
        <StUl>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((monthNum) => (
            <AccountMonthBtn key={monthNum} />
          ))}
        </StUl>
      </StMonthWrap>
      <AccountSection expenses={expenses} />
    </StWrap>
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
