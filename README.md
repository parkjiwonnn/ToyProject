#### 1.TodoList

#### 🌱 기간

2024.01.10 ~ 2024.01.13

#### 🌱 요구사항

1. 작성/삭제: Todo-list를 작성하고 삭제할 수 있다.
2. 완료버튼: 완료한 task에 대해서 완료 표시할 수 있다. -> toggle 형태
3. 수정: Todo-list를 수정할 수 있어야 한다.

<br/>
   
#### 2. Note_app

#### 🌱 기간

2024.01.15 ~ 2024.01.20

#### 🌱 요구사항

1. 노트 생성
2. 노트 수정
3. 노트 삭제
4. 노트 검색

#### 🌱 참고

https://velog.io/@devstone/React-Toy-Project-Note-App-%EB%85%B8%ED%8A%B8%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8

<br/>

#### 3. 캘린더

#### 🌱 기간

2024.01.21 ~ 2024.01.27

#### 🌱 요구사항

월별 캘린더를 구현
현재 날짜에 포인트를 주어 현재 날짜 표시
오늘 날짜가 있는 이전, 이후 달력 구현.
그 달력의 년도와 월을 표시.

<br/>

#### 4. 게시판(CRUD)

#### 🌱 기간

2024.01.28 ~ 2024.02.03

#### 🌱 요구사항

게시판 작성하기 (Create)
게시물 보여주기 (Read)
게시판 수정하기 (Update)
게시물 삭제하기 (Delete)

#### 🌱 참고

https://cloudcoke.tistory.com/31

<br/>

#### 5. 노션(notion)

#### 🌱 기간

2024.02.04 ~ 2024.02.12

#### 🌱 요구사항

문서 생성/수정/삭제
토글버튼/트리 구조

#### 🌱 파일 기능 소개

newList.js

- '+ 페이지 추가'버튼 클릭: 새 페이지 생성

subList.js

- 리스트의 '+'버튼 클릭: 해당 리스트의 하위페이지 생성

toggle.js

- 리스트의 '>'버튼 클릭: 해당 리스트의 하위페이지 숨김

Delete.js

- 리스트의 '-'버튼 클릭: 해당 리스트와 하위페이지 삭제

loadList.js

- 웹 페이지가 로드될 때 localStorage에 저장된 데이터의 리스트 생성
- 시작페이지 설정

saveData.js

- 리스트 제목 클릭: 해당 리스트의 페이지 로드
- title과 content input에 keyup 이벤트 발생: 리스트 제목 변경, localStorage에 데이터 저장 및 수정

#### 🌱 참고

https://velog.io/@gene028/notion-clone
https://github.com/sonsurim/surim-notion
https://ghost4551.tistory.com/144
