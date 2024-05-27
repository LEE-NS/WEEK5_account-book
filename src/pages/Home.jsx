import React from "react";
import styled from "styled-components";
import AccountMonth from "../components/AccountMonth";

const Home = ({ expenses, setExpenses }) => {
  return (
    <StWrap>
      <AccountMonth expenses={expenses} setExpenses={setExpenses} />
    </StWrap>
  );
};

export default Home;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #d1f596;
`;
