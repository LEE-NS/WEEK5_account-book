import React, { useState } from "react";
import Router from "./shared/Router";
import styled from "styled-components";

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
          category: "도서도서도서도서도서도서도서도서",
          job: "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
        },
      ];
    }
  });

  return (
    <Wrap>
      <Router
        month={month}
        setMonth={setMonth}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #d1f596;
  height: 100vh;
`;

/* 
아래 순서대로 진행하시는 것을 권장 드립니다. 본인이 할 수 있는 항목까지 최대한 도전해 보세요!

- [x]  (1) 프로젝트 셋업
    - Vite 를 이용해서 리액트 프로젝트를 셋업.
    - pages/ , components/ 폴더 작성 및 필요 컴포넌트 사전 작성
    - styled-components, react-router-dom 설치
    - index.html에 있는 title 변경
- [x]  (2) “props-drilling” 브랜치 생성 및 이동
    
    Remind: props-drilling 브랜치에서는 context 나 redux는 사용하지 않습니다!
    
    ```bash
    git checkout -b props-drilling
    ```
    
- [x]  (3) Router 셋업
    - react-router-dom을 이용하여 홈화면과 상세화면에 대한 라우터 설정을 해주세요.
- [x]  (4) 전역스타일링 적용
    - styled-components 를 이용해 주세요. (App.css, index.css 는 삭제하셔도 좋습니다.)
    - reset.css 코드 적용
- [x]  (5) 홈 화면 UI: 배너 및 헤더 파트 UI 구현
    - 상세요구사항
        
        월 선택 탭에서 월을 클릭했을 때 어떤 탭이 활성화되었는지 styled-components의 조건부 스타일링을 적용해 보세요.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/16b27203-138b-47da-ab6e-12f5c5e3b308/Untitled.png)
        
- [x]  (6) 홈 화면 UI: Dummy Data(fakeData.json)를 이용한 리스트 UI 구현
    - fakeData.json
        
        참고:  제공해 드린 fakedata 와 같은 형식을 이용하실 필요는 없습니다. 자유롭게 데이터 형식을 택하셔도 무방합니다. 
        
        ```json
        [
            {
                "id": "25600f72-56b4-41a7-a9c2-47358580e2f8",
                "date": "2024-01-05",
                "item": "식비",
                "amount": 100000,
                "description": "세광양대창"
            },
            {
                "id": "25600f72-53b4-4187-a9c2-47358580e2f8",
                "date": "2024-01-10",
                "item": "도서",
                "amount": 40500,
                "description": "모던 자바스크립트"
            },
            {
                "id": "24310f72-56b4-41a7-a9c2-458580ef1f8",
                "date": "2024-02-02",
                "item": "식비",
                "amount": 50000,
                "description": "회식"
            },
            {
                "id": "25600f72-99b4-41z7-e4h6-47312365e2f8",
                "date": "2024-02-02",
                "item": "간식",
                "amount": 500,
                "description": "아이스크림"
            },
            {
                "id": "25143e72-16e2-22a7-a9c2-47358580e2f8",
                "date": "2024-02-02",
                "item": "여행",
                "amount": 1055000,
                "description": "일본여행"
            },
            {
                "id": "25600f72-97p2-14a7-a9c2-47363950e2t8",
                "date": "2024-02-02",
                "item": "미용",
                "amount": 155000,
                "description": "미용실"
            },
            {
                "id": "24312f70-97q2-14a7-a9c2-47132950e2t8",
                "date": "2024-02-02",
                "item": "도서",
                "amount": 75000,
                "description": "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발"
            }
        ]
        ```
        
    - 상세요구사항
        
        1) 지출 내역은 딱 한 줄까지만 표현하고 한 줄이상의 컨텐츠일 경우 … 으로 표현하세요.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/a835feb8-eac1-4ac6-a321-1e54b57c684d/Untitled.png)
        
        2) 각 월별에 맞는 데이터를 보여주세요.
        
        로컬 스토리지를 사용하여 마지막으로 선택된 '월'을 저장하고, 해당 페이지가 다시 시작 될 때마다 해당 값을 불러옵니다. **`useEffect`**를 사용하여 월이 변경될 때마다 로컬 스토리지에 값을 저장합니다.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/5f6859a3-8286-4c97-8864-b08ea3547462/Untitled.png)
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/6b26e455-425b-47e7-859c-4eae710f72cd/Untitled.png)
        
- [x]  (7) 지출 항목 입력창 작성하여 지출 항목 등록 기능 구현
    - 상세요구사항
        
        1)  날짜, 항목, 금액, 내용을 입력하고 지출 항목을 등록하세요.
        
        2) 날짜와 금액에 대해 유효성 검사를 적용해 주세요.
        
        3) 지출 등록 시 id는 uuid 라이브러리를 이용해 생성합니다.
        
        참고:  제공해 드린 fakedata 와 같은 형식을 이용하실 필요는 없습니다. 자유롭게 데이터 형식을 택하셔도 무방합니다. 
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/df1b6498-503e-48d0-bd24-0e3c8ae9ff30/Untitled.png)
        
- [x]  (8) 홈화면의 지출 항목 클릭 시 상세화면으로 이동 구현
    - 상세화면 이동 시 클릭한 지출 항목의 id값을 가지고 이동해 주세요.
- [x]  (9) 지출 수정화면 UI 구현
    - 상세요구사항
        
        1) 지출을 수정할 수 있는 UI 표현해 주세요.
        
        2) 수정할 값을 받는 <Input> 을 만들 때 useRef 를 사용해주세요.
        
        3) 수정, 삭제, 뒤로가기 기능을 넣어주세요.
        
        참고:  아래 UI 를 따라가실 필요 없고 자유롭게 구성해주세요.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/3f38cbf9-4970-469b-ae7c-0c2a307a48fc/Untitled.png)
        
        3) 수정 버튼을 누르면, 기존 지출의 데이터를 수정하고 ‘홈’ 으로 이동합니다. 수정된 변경사항이 바로 적용이 되어야 합니다.
        
        4) 삭제 버튼 클릭 시 즉시 삭제하기 보다는 사용자에게 확인받은 뒤 삭제처리 하도록 해주세요. 삭제 이후에는 홈으로 이동시켜주세요.
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/46ddce77-cfa6-4e6a-be79-59b05638fdec/Untitled.png)
        
- [ ]  (10) “context” 로 브랜치 생성 및 이동
    
    Remind: context 브랜치에서는 redux는 사용하지 않습니다!
    
    ```bash
    git checkout -b context
    ```
    
- [ ]  (11) props drilling으로 불편하게 관리하던 state를 context api 로 리팩터링
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
