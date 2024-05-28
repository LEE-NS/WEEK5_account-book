import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ expenses, setExpenses }) => {
  const param = useParams();
  const navigate = useNavigate();

  const filteredItem = expenses.filter((item) => item.id === param.id)[0];
  const filteredItemIndex = expenses.indexOf(filteredItem);

  const date = useRef("");
  const money = useRef(null);
  const category = useRef("");
  const job = useRef("");

  useEffect(() => {
    date.current.value = filteredItem.date;
    money.current.value = filteredItem.money.replaceAll(",", "");
    category.current.value = filteredItem.category;
    job.current.value = filteredItem.job;
  }, []);

  const updateItem = (e) => {
    e.preventDefault();

    /* 유효성 검사 */
    if (
      !date.current.value.trim() ||
      isNaN(Date.parse(String(date.current.value.trim())))
    ) {
      return alert("올바른 날짜 형식이 아닙니다. (예시 : 0000-00-00)");
    }

    if (
      !money.current.value.trim() ||
      !category.current.value.trim() ||
      !job.current.value.trim()
    ) {
      return alert("올바른 입력이 아니거나 입력이 없습니다.");
    }

    const updatedItem = {
      id: filteredItem.id,
      date: date.current.value,
      money: money.current.value.replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      ),
      category: category.current.value,
      job: job.current.value,
    };

    // parsedExpense에서 filteredItem제거 후 updatedItem을 filteredItem index로 삽입
    expenses.splice(filteredItemIndex, 1, updatedItem);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    setExpenses(expenses);

    navigate("../");
  };

  const removeItem = (e) => {
    e.preventDefault();
    expenses.splice(filteredItemIndex, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setExpenses(expenses);
    navigate("../");
  };

  const goPrevPage = () => {
    navigate("../");
  };

  return (
    <StFormWrap>
      <form>
        <StFormInner>
          <StUl>
            <StLi>
              <StLabel>날짜</StLabel>
              <StInput type="text" ref={date} placeholder="0000-00-00" />
            </StLi>
            <StLi>
              <StLabel>금액</StLabel>
              <StInput type="number" ref={money} placeholder="단위: 원화" />
            </StLi>
            <StLi>
              <StLabel>카테고리</StLabel>
              <StInput
                type="text"
                ref={category}
                placeholder="카테고리를 입력하세요"
              />
            </StLi>
            <StLi>
              <StLabel>내용</StLabel>
              <StInput type="text" ref={job} placeholder="내용을 입력하세요" />
            </StLi>
          </StUl>
          <StButtonWrap>
            <StButton onClick={updateItem}>수정</StButton>
            <StButton onClick={removeItem}>삭제</StButton>
            <StButton onClick={goPrevPage}>뒤로가기</StButton>
          </StButtonWrap>
        </StFormInner>
      </form>
    </StFormWrap>
  );
};

export default Detail;

const StFormWrap = styled.div`
  padding: 20px 0;
`;
const StFormInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
  border-radius: 17px;
  background-color: #fefefe;
`;
const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StLi = styled.li`
  width: 800px;
  margin: 0 auto;
`;
const StButton = styled.button`
  width: 88px;
  height: 37px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #fefefe;

  &:nth-child(1) {
    background-color: #3862beb5;

    &:hover {
      background-color: #3862be;
    }
  }
  &:nth-child(2) {
    background-color: #cc5a2db5;

    &:hover {
      background-color: #cc5a2d;
    }
  }
  &:nth-child(3) {
    background-color: #757575b5;

    &:hover {
      background-color: #757575;
    }
  }

  &:hover {
    transition: background-color 0.2s;
  }
`;
const StInput = styled.input`
  width: calc(100% - 12px);
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
const StButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

/* 
button 누를 시 Home으로 돌아가야 한다.(선택된 월별 카테고리는 보존되어야 함)


*/
