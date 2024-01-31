import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StFeedSection = styled.div`
  width: 1000px;
  height: 500px;
  margin-top: 200px;
  justify-content: center;
  background-color: #585555;
  padding: 16px;
  color: white;
`;
const StTop = styled.div`
  display: flex;
  flex-direction: row;
`;
const StFeedNicknameDate = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  gap: 400px;
`;
const StFeedNickname = styled.div`
  font-size: 32px;
`;
const StFeedDate = styled.div`
  font-size: 16px;
`;
const StFeedContent = styled.textarea`
  margin: 24px 0 24px 0;
  width: 100%;
  font-size: 24px;
  padding: 16px;
  line-height: 48px;
  border-radius: 10px;
  height: 275px;
  background-color: black;
  color: white;
`;
const StButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

function Detail({ feed, setFeed }) {
  const params = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const foundData = feed.find((item) => {
    return item.id === params.id;
  });

  const goHome = () => {
    navigate("/");
  };
  const EditButton = () => {
    if (!editText) {
      return alert("수정사항이 없습니다.");
    }
    setIsEditing(false);
    const answer = window.confirm("이대로 수정하시겠습니까?");
    if (!answer) return;
    setFeed([...feed, (foundData.content = editText)]);
  };
  const DeleteButton = () => {
    const answer = window.confirm("정말삭제하시겠습니까?");
    if (!answer) return;

    // const prac = feed.filter((item) => item.id !== params.id);
    // setFeed(prac);

    setFeed((prevFeed) => prevFeed.filter((item) => item.id !== params.id));
    navigate("/");
  };

  return (
    <>
      {foundData.length === 0 ? (
        <div>데이터가없습니다</div>
      ) : (
        <>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              position: "absolute",
              left: "30px",
              top: "30px",
              width: "100px",
              height: "50px",
            }}
            onClick={goHome}
          >
            홈으로
          </button>

          <StFeedSection>
            <StTop>
              <img
                style={{
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  marginRight: "20px",
                }}
                src={`${foundData.avatar}`}
                alt="유저 프로필 이미지"
              />

              <StFeedNicknameDate>
                <StFeedNickname>{foundData.nickname}</StFeedNickname>
                <StFeedDate>{foundData.createdAt}</StFeedDate>
              </StFeedNicknameDate>
            </StTop>
            <div
              style={{
                paddingTop: "12px",
                fontSize: "24px",
                fontWeight: 300,
                marginRight: "90%",
                width: "200px",
              }}
            >
              To:{foundData.writedTo}
            </div>

            <>
              {isEditing ? (
                <StFeedContent
                  onChange={(e) => setEditText(e.target.value)}
                  defaultValue={foundData.content}
                  maxLength={100}
                  key={foundData.id}
                />
              ) : (
                <>
                  <StFeedContent readOnly defaultValue={foundData.content} />
                  {/* <StFeedContent readOnly>{foundData.content}</StFeedContent> */}
                </>
              )}
              {!isEditing ? (
                <StButton>
                  <button
                    style={{
                      fontSize: "15px",
                      padding: "5px 5px",
                      backgroundColor: "black",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsEditing(true)}
                  >
                    수정
                  </button>
                  <button
                    style={{
                      fontSize: "15px",
                      padding: "5px 5px",
                      backgroundColor: "black",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={DeleteButton}
                  >
                    삭제
                  </button>
                </StButton>
              ) : (
                <StButton>
                  <button
                    style={{
                      fontSize: "15px",
                      padding: "5px 5px",
                      backgroundColor: "black",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={EditButton}
                  >
                    수정완료
                  </button>
                </StButton>
              )}
            </>
          </StFeedSection>
        </>
      )}
    </>
  );
}

export default Detail;
