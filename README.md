## 브랜치
1. props-drilling
2. context api
3. redux - https://react-hw2-r4sjodoeh-rlaedous.vercel.app/

github pages로 배포 하려했으나 화면이 나타나지 않는 문제로 인해 vercel로 배포하였습니다.


- 팬레터 CRUD 구현 (작성, 조회, 수정, 삭제)
- 아티스트별 게시물 조회 기능 구현 (Home - Read)
- 원하는 아티스트에게 팬레터 등록 구현 (Home - Create)
- 팬레터 상세 화면 구현 (Detail - Read)
- 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)
- 상세화면에서 팬레터 삭제 구현 (Detail - Delete)
- localStorage를 활용하여 새로고침시에도 데이터 유지


- [v]  styled-components 를 이용하여 스타일링
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components 화 할 것
- [v]  전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정
- [v]  styled-components에 props를 넘김으로 인한 조건부 스타일링 적용
    - 아티스트 선택탭에 적용해 보세요
- [v]  팬레터 등록 시 id는 uuid 라이브러리를 이용




## 파일구조
redux
```
- 📦src
 ┣ 📂assets
 ┃ ┗ 📜defaultAvatar.jpg
 ┣ 📂components
 ┃ ┗ 📜Form.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜letter.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜GlobalStyle.jsx
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┣ 📜reset.css
 ┗ 📜setupTests.js
```
