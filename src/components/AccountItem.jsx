import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AccountItem = ({ item, expenses, setExpenses }) => {
  const navigate = useNavigate();
  const detailNavigate = (item) => {
    navigate(`detail/${item.id}`);
  };

  return (
    <StLi onClick={() => detailNavigate(item)}>
      <StSideDetail>
        <StDate>{item.date}</StDate>
        <div>
          <span>{item.category}</span> - <span>{item.job}</span>
        </div>
      </StSideDetail>
      <StMoney>{item.money} 원</StMoney>
    </StLi>
  );
};

export default AccountItem;

const StLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  background-color: #ececec;
`;
const StDate = styled.p`
  font-size: 13px;
  color: #8f8f8f;
`;
const StSideDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const StMoney = styled.p`
  font-weight: 700;
`;
