import React from "react";
import styled from "styled-components";
import AccountMonth from "../components/AccountMonth";
import AccountForm from "../components/AccountForm";
import AccountSection from "../components/AccountSection";

const Home = ({ month, setMonth, expenses, setExpenses }) => {
  return (
    <StWrap>
      <AccountForm
        month={month}
        setMonth={setMonth}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      <AccountMonth month={month} setMonth={setMonth} />
      <AccountSection expenses={expenses} />
    </StWrap>
  );
};

export default Home;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 20px 0;
`;
