import React from "react";
import styled from "styled-components";
import AccountItem from "./AccountItem";

const AccountSection = ({ expenses, setExpenses }) => {
  return (
    <StWrap>
      <StUl>
        {expenses.length !== 0 ? (
          expenses.map((item) => <AccountItem key={item.id} item={item} />)
        ) : (
          <StNoItemLi>지출 내역이 없습니다.</StNoItemLi>
        )}
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

const StNoItemLi = styled.li`
  padding: 50px 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #ececec;
  color: #8f8f8f;
`;
