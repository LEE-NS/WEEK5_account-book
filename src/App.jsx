import React, { useState } from "react";
import Router from "./shared/Router";
import styled from "styled-components";
import { AccountContext } from "./context/AccountContext";

const date = new Date();

const App = () => {
  const [month, setMonth] = useState(() => {
    if (localStorage.getItem("selectedMonth")) {
      return localStorage.getItem("selectedMonth").padStart(2, "0");
    } else {
      const init = date.getMonth() + 1;
      localStorage.setItem("selectedMonth", JSON.stringify(init));
      return init;
    }
  });

  const [expenses, setExpenses] = useState(() => {
    if (localStorage.getItem("expenses")) {
      return JSON.parse(localStorage.getItem("expenses"));
    } else {
      return [
        {
          id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
          date: "2024-01-05",
          money: "100,000",
          category: "식비",
          job: "세광양대창",
        },
        {
          id: "25600f72-53b4-4187-a9c2-47358580e2f8",
          date: "2024-01-10",
          money: "40,500",
          category: "도서",
          job: "모던 자바스크립트",
        },
        {
          id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
          date: "2024-02-02",
          money: "50,000",
          category: "식비",
          job: "회식",
        },
        {
          id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
          date: "2024-02-02",
          money: "500",
          category: "간식",
          job: "아이스크림",
        },
        {
          id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
          date: "2024-02-02",
          money: "1,055,000",
          category: "여행",
          job: "일본여행",
        },
        {
          id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
          date: "2024-02-02",
          money: "155,000",
          category: "미용",
          job: "미용실",
        },
        {
          id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
          date: "2024-02-02",
          money: "75,000",
          category: "도서",
          job: "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
        },
      ];
    }
  });

  return (
    <Wrap>
      <AccountContext.Provider
        value={{ month, setMonth, expenses, setExpenses }}
      >
        <Router />
      </AccountContext.Provider>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;

/* 
- [x]  (10) “context” 로 브랜치 생성 및 이동
    
    Remind: context 브랜치에서는 redux는 사용하지 않습니다!
    
    ```bash
    git checkout -b context
    ```
    
- [x]  (11) props drilling으로 불편하게 관리하던 state를 context api 로 리팩터링
    - 전체 지출 state 는 context 전역상태로 변경합니다. 이외에도 전역상태 관리하고 싶은 상태가 있으면 자유롭게 context 로 관리해 줍니다.
- [ ]  (12) “redux” 로 브랜치 생성 및 이동
    
    Remind: redux 브랜치에서는 context 없이 redux만 사용합니다!
    
    ```bash
    git checkout -b redux
    ```
    
- [ ]  (13) context 로 관리중이던 모든 것을 redux 로 리팩터링
    - Redux-toolkit 을 사용해 리덕스를 구성해 주세요. (ducks 패턴은 사용하지 않습니다.)
- [ ]  (14) 13단계까지 모두 완료하셨다면 선택구현사항들에 도전해 보시면 되겠습니다!

<aside>
👌 선택 구현 사항 : 
필수 구현 사항을 모두 완료하고 나서 여유가 되신다면 아래에 도전해 보실 만한 항목들을 살펴보고 선택적으로 구현에 도전해 보세요

</aside>

- 모달 구현
    - window.alert 이나 window.confirm 대신 직접 구현한 모달을 적용해 봅시다.
- 월별 지출 Summary
    - 월별 지출 상세를 정리해주는 UI 를 만들어 봅니다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/1ed82615-e0d0-438d-9f51-f97d19e76c03/Untitled.png)
    
- 지출 데이터 정렬
    - Sort 로직을 작성하여 데이터를 시간순 혹은 종류별로 정렬해 봅시다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/68169558-dfdc-4703-a1bf-66c1db7d50d4/edd4cbae-14f6-4ef8-b7be-30fe8761949e.png)
    
- src 폴더 기준 절대경로 설정 (vite.config.js)  ex)   ../../../../../components/buttons.js  ⇒  @/components/button.js
*/
