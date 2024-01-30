// import React from "react";
// import { fakeData } from "../shared/fakeData";
// import styled from "styled-components";
// function Feed({ feed }) {
//   const StFeedSection = styled.div`
//     flex-direction: row;
//   `;
//   const StFeedNicknameDate = styled.div`
//     display: flex;
//     flex-direction: column;
//   `;
//   const StFeedNickname = styled.div``;
//   const StFeedDate = styled.div``;
//   const StFeedContent = styled.div``;
//   return (
//     <>
//       <div>
//         {fakeData
//           .filter((item) => item.writedTo === "카리나")
//           .map((item) => {
//             return (
//               <div key={item.id} style={{ border: "1px solid red" }}>
//                 <StSection>
//                   <img
//                     src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
//                     alt="유저 프로필 이미지"
//                   />
//                   <StNicknameDate>
//                     <StNickname>{item.nickname}</StNickname>
//                     <StDate>{item.createdAt}</StDate>
//                     <StContent>{item.content}</StContent>
//                   </StNicknameDate>
//                 </StSection>
//               </div>
//             );
//           })}
//       </div>
//       {/* 팬레터 등록 */}
//       <div>
//         {feed
//           .filter((item2) => item2.writedTo === "카리나")
//           .map((item2) => {
//             console.log("item2", item2);
//             return (
//               // <div key={item2.id}>{item2.nickname}</div>
//               <div key={item2.id}>
//                 <StSection>
//                   <img src="" alt="유저 프로필 이미지" />
//                   <StNicknameDate>
//                     <StNickname>{item2.nickname}</StNickname>
//                     <StDate>{item2.createdAt}</StDate>
//                     <StContent>{item2.content}</StContent>
//                   </StNicknameDate>
//                 </StSection>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }

// export default Feed;
