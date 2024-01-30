// import React, { useState } from "react";
// import styled from "styled-components";

// const StTop = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center; */
//   position: relative;
//   background-size: 25%;
//   width: 100%;
//   height: 300px;
//   margin-bottom: 20px;
//   background-image: url(https://sparta-react-practical.vercel.app/static/media/aespa.15389b79f7de4425f5d1.jpeg);
// `;
// const StHeader = styled.div`
//   color: white;
//   font-size: 50px;
//   position: absolute;
//   top: 100px;
// `;
// const StUl = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid white;
//   border-radius: 10px;
//   width: 500px;
//   padding: 15px;
//   background-color: rgb(79, 85, 81);
//   bottom: 16px;
//   position: absolute;
// `;
// const StLi = styled.li`
//   font-size: 20px;
//   border: 1px solid black;
//   border-radius: 5px;
//   width: 100px;
//   padding: 5px;
//   text-align: center;
//   user-select: none;
//   cursor: pointer;
//   background-color: yellow;

//   color: black;
// `;
// function Header({ feed, fakeData, filterMember, setMember }) {
//   console.log(feed);
//   console.log(filterMember);
//   const [clickPerson, setClickPerson] = useState();
//   console.log(fakeData);

//   const newClickPerson = fakeData
//     .filter((item) => item.writedTo === "카리나")
//     .map((item) => item.writedTo);
//   console.log(newClickPerson);

//   const ClickPerson = () => {
//     setClickPerson(newClickPerson);
//   };

//   return (
//     <StTop>
//       <StHeader>에스파 팬레터 콜렉션</StHeader>;
//       <StUl>
//         <StLi onClick={() => ClickPerson()}>카리나</StLi>
//         <StLi>윈터</StLi>
//         <StLi>닝닝</StLi>
//         <StLi>지젤</StLi>
//       </StUl>
//     </StTop>
//   );
// }

// export default Header;
