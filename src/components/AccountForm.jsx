import React, { useRef } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const AccountForm = ({ month, setMonth, expenses, setExpenses }) => {
  const date = useRef("");
  const money = useRef(null);
  const category = useRef("");
  const job = useRef("");

  const addItem = () => {
    event.preventDefault();

    /* 유효성 검사 */
    if (
      !date.current.value ||
      !money.current.value.trim() ||
      !category.current.value.trim() ||
      !job.current.value.trim()
    ) {
      return alert("내용을 모두 입력하십시오");
    }

    const newExpense = {
      id: uuid(),
      date: date.current.value,
      money: money.current.value.replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      ),
      category: category.current.value,
      job: job.current.value,
    };

    const totalExpenses = [...expenses, newExpense];

    window.localStorage.setItem("expenses", JSON.stringify(totalExpenses));

    /* form 초기화 */
    date.current.value = "";
    money.current.value = null;
    category.current.value = "";
    job.current.value = "";
  };

  return (
    <form onSubmit={addItem}>
      <StFormInner>
        <StUl>
          <li>
            <StLabel>날짜</StLabel>
            <StInput type="text" ref={date} placeholder="0000-00-00" />
          </li>
          <li>
            <StLabel>금액</StLabel>
            <StInput type="number" ref={money} placeholder="단위: 원화" />
          </li>
          <li>
            <StLabel>카테고리</StLabel>
            <StInput
              type="text"
              ref={category}
              placeholder="카테고리를 입력하세요"
            />
          </li>
          <li>
            <StLabel>내용</StLabel>
            <StInput type="text" ref={job} placeholder="내용을 입력하세요" />
          </li>
        </StUl>
        <StButton>추가</StButton>
      </StFormInner>
    </form>
  );
};

export default AccountForm;

const StFormInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  width: 800px;
  height: 55px;
  margin: 0 auto;
  padding: 30px 20px;
  border-radius: 17px;
  background-color: #fefefe;
`;
const StUl = styled.ul`
  display: flex;
  gap: 20px;
`;
const StButton = styled.button`
  width: 88px;
  height: 37px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  background-color: #ececec;
  cursor: pointer;

  &:hover {
    background-color: #c4c4c4;
  }
`;
const StInput = styled.input`
  width: 150px;
  height: 25px;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  padding: 5px;

  &:focus {
    outline: 1px solid #acacac;
  }
`;
const StLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  text-indent: 3px;
  font-size: 13px;
  font-weight: 700;
`;
