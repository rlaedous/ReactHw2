import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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

function Detail({ feed, setFeed }) {
  const params = useParams();
  const navigate = useNavigate();

  const foundData = feed.find((item) => {
    return item.id === params.id;
  });

  const goHome = () => {
    navigate("/");
  };
  const DeleteButton = () => {
    setFeed((prev) => prev.filter((item) => item.id !== params.id));
    navigate("/");
  };

  return (
    <>
      {foundData.length === 0 ? (
        <div>데이터가없습니다</div>
      ) : (
        <>
          <button onClick={goHome}>홈으로</button>
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
          <button>수정</button>
          <button onClick={DeleteButton}>삭제</button>
        </>
      )}
    </>
  );
}

export default Detail;
