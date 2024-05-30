import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";
import AccountProvider from "./context/AccountContext";

const App = () => {
  return (
    <Wrap>
      <AccountProvider>
        <Router />
      </AccountProvider>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;
