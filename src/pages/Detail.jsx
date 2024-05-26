import React, { useRef } from "react";

const Detail = ({ expenses, setExpenses }) => {
  const date = useRef("");
  const money = useRef(null);
  const category = useRef("");
  const job = useRef("");

  const updateItem = () => {};
  const removeItem = () => {};
  const goPrevPage = () => {};

  return (
    <form>
      <ul>
        <li>
          <label>날짜</label>
          <input type="date" ref={date} />
        </li>
        <li>
          <label>금액</label>
          <input type="number" ref={money} />
        </li>
        <li>
          <label>카테고리</label>
          <input type="text" ref={category} />
        </li>
        <li>
          <label>내용</label>
          <input type="text" ref={job} />
        </li>
      </ul>
      <div>
        <button onClick={updateItem}>수정</button>
        <button onClick={removeItem}>삭제</button>
        <button onClick={goPrevPage}>뒤로가기</button>
      </div>
    </form>
  );
};

export default Detail;

/* 
button 누를 시 Home으로 돌아가야 한다.(선택된 월별 카테고리는 보존되어야 함)


*/
