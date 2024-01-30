import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const StFeedSection = styled.div`
  flex-direction: row;
  width: 1000px;
  height: 500px;
  margin: 20px;
`;
const StFeedNicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;
const StFeedNickname = styled.div``;
const StFeedDate = styled.div``;
const StFeedContent = styled.div``;

function Detail({ feed }) {
  const params = useParams();
  console.log("params", params);

  // fakeData.js에서 가져와서 가공
  const foundData = feed.find((item) => {
    return item.id === params.id;
  });
  console.log(foundData);
  // feed에서 가공
  const feedData = feed.find((item) => {
    return item.id === params.id;
  });

  console.log(feed);
  console.log(feedData);

  return (
    <>
      {foundData.length === 0 ? (
        <div>데이터가없습니다</div>
      ) : (
        <>
          <div>상세페이지1111</div>
          <button>홈으로</button>
          <div>
            <StFeedSection>
              {/* <img src="" alt="유저 프로필 이미지" /> */}
              {foundData.avatar ? (
                <img src="" alt="유저 프로필 이미지" />
              ) : (
                <></>
              )}
              <StFeedNicknameDate>
                <StFeedNickname>{foundData.nickname}</StFeedNickname>
                <StFeedDate>{foundData.createdAt}</StFeedDate>
                <StFeedContent>{foundData.content}</StFeedContent>
              </StFeedNicknameDate>
              <div>{foundData.writedTo}</div>
            </StFeedSection>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
