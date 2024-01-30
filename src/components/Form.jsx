import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const StTop = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  background-size: 25%;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background-image: url(https://sparta-react-practical.vercel.app/static/media/aespa.15389b79f7de4425f5d1.jpeg);
`;
const StHeader = styled.div`
  color: white;
  font-size: 50px;
  position: absolute;
  top: 100px;
`;
const StUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 10px;
  width: 500px;
  padding: 15px;
  background-color: rgb(79, 85, 81);
  bottom: 16px;
  position: absolute;
`;
const StLi = styled.option`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  background-color: yellow;

  color: black;
`;

const StForm = styled.form`
  width: 500px;
  background-color: gray;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
`;
const StSection = styled.section`
  display: flex;
  margin: 0 0 10px 0;
`;
const StNickname = styled.div``;
const StInput = styled.input``;
const StContents = styled.div``;
const StTextarea = styled.textarea`
  resize: none;
`;
const StButtonDiv = styled.div``;
const StButton = styled.button``;
const StFeedSection = styled.div`
  flex-direction: row;
`;
const StFeedNicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;
const StFeedNickname = styled.div``;
const StFeedDate = styled.div``;
const StFeedContent = styled.div``;

function Form({ fakeData }) {
  const [feed, setFeed] = useState([
    {
      createdAt: "",
      nickname: "",
      avatar: "",
      content: "",
      writedTo: "",
      id: uuid(),
    },
  ]);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [clickd, setClickd] = useState("카리나");

  const ClickPerson = (e) => {
    setClickd(e.target.value);
  };

  const Enroll = (e) => {
    e.preventDefault();
    if (nickname.length === 0 || content.length === 0) {
      return alert("닉네임과 내용은 필수 입력입니다!");
    }
    const newFeed = {
      createdAt: +new Date(),
      nickname,
      content,
      // avatar,
      writedTo: member,
      id: uuid(),
    };
    setFeed((prev) => [...prev, newFeed]);
    alert("등륵이 완료됐습니다");
  };

  const nickNameChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const contentsChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const selectMember = (e) => {
    console.log(e.target.value);
    setMember(e.target.value);
  };

  const filteredData = fakeData.filter((item) => item.writedTo === clickd);
  return (
    <>
      <StTop>
        <StHeader>에스파 팬레터 콜렉션</StHeader>;
        <StUl>
          {/* option으로 주니까 value나타남 */}
          <StLi value="카리나" onClick={(e) => ClickPerson(e)}>
            카리나
          </StLi>
          <StLi value="윈터" onClick={ClickPerson}>
            윈터
          </StLi>
          <StLi value="닝닝" onClick={ClickPerson}>
            닝닝
          </StLi>
          <StLi value="지젤" onClick={ClickPerson}>
            지젤
          </StLi>
        </StUl>
      </StTop>
      <StForm onSubmit={Enroll}>
        {/* <StForm onSubmit={() => Enroll()}> */}
        <StSection>
          <StNickname>닉네임</StNickname>
          <StInput
            type="text"
            value={nickname}
            onChange={nickNameChangeHandler}
          />
        </StSection>
        <StSection>
          <StContents>내용</StContents>
          <StTextarea
            type="text"
            value={content}
            onChange={contentsChangeHandler}
          />
        </StSection>
        <StSection>
          누구에게 보내실 건가요?
          <select onChange={selectMember}>
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
            <option value="지젤">지젤</option>
          </select>
        </StSection>
        <StButtonDiv>
          <StButton>팬레터 등록</StButton>
        </StButtonDiv>
      </StForm>

      {/* 피드부분 */}

      <div>
        {filteredData.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid red" }}>
              <StFeedSection>
                <img
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg"
                  alt="유저 프로필 이미지"
                />
                <StFeedNicknameDate>
                  <StFeedNickname>{item.nickname}</StFeedNickname>
                  <StFeedDate>{item.createdAt}</StFeedDate>
                  <StFeedContent>{item.content}</StFeedContent>
                </StFeedNicknameDate>
                <div>{item.writedTo}</div>
              </StFeedSection>
            </div>
          );
        })}

        {filteredData.length === 0 ? <>데이터가없습니다</> : null}
      </div>

      {/* 팬레터 등록 */}
      <div>
        {feed
          .filter((item2) => item2.writedTo === clickd)
          // .filter((item2) => item2.writedTo === "카리나")
          .map((item2) => {
            return (
              // <div key={item2.id}>{item2.nickname}</div>
              <div key={item2.id}>
                <StFeedSection>
                  {/* <img src="" alt="유저 프로필 이미지" /> */}
                  {item2.avatar ? (
                    <img src="" alt="유저 프로필 이미지" />
                  ) : (
                    <></>
                  )}
                  <StFeedNicknameDate>
                    <StFeedNickname>{item2.nickname}</StFeedNickname>
                    <StFeedDate>{item2.createdAt}</StFeedDate>
                    <StFeedContent>{item2.content}</StFeedContent>
                  </StFeedNicknameDate>
                  <div>{item2.writedTo}</div>
                </StFeedSection>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Form;
