import React from "react";
import styled from "styled-components";
import AccountMonth from "../components/AccountMonth";
import AccountForm from "../components/AccountForm";
import AccountSection from "../components/AccountSection";

const Home = ({ month, setMonth }) => {
  return (
    <StWrap>
      <AccountForm month={month} setMonth={setMonth} />
      <AccountMonth month={month} setMonth={setMonth} />
      <AccountSection />
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
