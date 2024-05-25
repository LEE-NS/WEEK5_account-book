import React from "react";
import styled from "styled-components";

const AccountForm = () => {
  return (
    <div>
      <StForm>
        <StFormInner>
          <StUl>
            <li>
              <StName>날짜</StName>
              <StInput type="date" />
            </li>
            <li>
              <StName>금액</StName>
              <StInput type="number" placeholder="단위: 원화" />
            </li>
            <li>
              <StName>카테고리</StName>
              <StInput type="text" placeholder="카테고리를 입력하세요" />
            </li>
            <li>
              <StName>내용</StName>
              <StInput type="text" placeholder="내용을 입력하세요" />
            </li>
          </StUl>
          <StButton>추가</StButton>
        </StFormInner>
      </StForm>
    </div>
  );
};

export default AccountForm;

const StForm = styled.form`
  background-color: aqua;
`;
const StFormInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 20px;
  width: 800px;
  height: 100px;
  margin: 0 auto;
`;
const StUl = styled.ul`
  display: flex;
  gap: 20px;
`;
const StButton = styled.button`
  width: 88px;
  height: 2.5rem;
  font-weight: 700;
`;
const StInput = styled.input`
  width: 150px;
  height: 1.5rem;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  padding: 5px;

  &:focus {
    outline: 1px solid #acacac;
  }
`;
const StName = styled.p`
  margin-bottom: 5px;
  text-indent: 3px;
  font-size: 13px;
  font-weight: 700;
`;
