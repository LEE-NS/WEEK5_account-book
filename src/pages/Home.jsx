import React from "react";
import AccountForm from "../components/AccountForm";
import styled from "styled-components";

const Home = () => {
  return (
    <StWrap>
      <AccountForm></AccountForm>
    </StWrap>
  );
};

export default Home;

const StWrap = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
`;
