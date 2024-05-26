import React from "react";
import styled from "styled-components";
import AccountItem from "./AccountItem";

const AccountSection = ({ expenses, setExpenses }) => {
  return (
    <StWrap>
      <StUl>
        {expenses?.map((item) => (
          <AccountItem key={item.id} item={item} />
        ))}
      </StUl>
    </StWrap>
  );
};

export default AccountSection;

const StWrap = styled.div`
  width: 800px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 17px;
  background-color: #fefefe;
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TestLi = styled.li`
  background-color: #8f8fff;
  padding: 5px 10px;
  border-radius: 10px;
`;
