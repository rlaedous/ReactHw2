import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/modules/leteer";
import basic from "../assets/defaultAvatar.jpg";

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
const StLi = styled.button`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? "red" : "yellow")};
  &:hover {
    background-color: lightblue;
    color: white;
    transform: scale(1.5);
  }
  color: black;
  &:active {
    background-color: black;
  }
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
const StSelectWrap = styled.section`
  display: flex;
  flex-direction: row;
`;
const StNickname = styled.div`
  width: 100px;
  justify-content: center;
`;
const StInput = styled.input`
  padding: 5px;
  width: 100%;
`;
const StContents = styled.div`
  width: 100px;
  justify-content: center;
`;
const StTextarea = styled.textarea`
  padding: 5px;
  width: 100%;
  resize: none;
`;
const StButtonDiv = styled.div`
  display: flex;
  /* background-color: red; */
  align-items: flex-end;
`;
const StButton = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  /* user-select: none; */

  background-color: black;
  color: white;
`;
const StFeedSection = styled.div`
  flex-direction: column;
  width: 500px;
  /* margin: 20px; */
  padding: 10px;
  /* border-radius: 10px; */
  border: 1px solid white;
`;
const StCard = styled.div`
  flex-direction: column;
  color: white;
  border: 1px solid white;
  display: flex;
  background-color: gray;
  &:hover {
    color: black;
    transform: scale(1.01);
  }
`;
const StFeedNicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;
const StFeedContent = styled.div`
  background-color: rgb(37, 33, 33);
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  width: 400px;
  margin-bottom: 10px;
  margin-left: 50px;
  display: block;
`;

function Form() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [clicked, setClicked] = useState("카리나");

  const reduxPrac = useSelector((state) => state.reducerPrac);
  const reduxfilteredData = reduxPrac.filter(
    (item) => item.writedTo === clicked
  );

  const ClickPerson = (e) => {
    setClicked(e.target.value);
  };

  const Enroll = (e) => {
    e.preventDefault();
    if (nickname.length === 0 || content.length === 0) {
      return alert("닉네임과 내용은 필수 입력입니다!");
    }
    const newFeed = {
      createdAt: Number(new Date()),
      nickname,
      content,
      avatar: basic,
      writedTo: member,
      id: uuid(),
    };
    dispatch(addFeed(newFeed));
    alert("등륵이 완료됐습니다");
  };

  const nickNameChangeHandler = (e) => {
    setNickname(e.target.value);
  };

  const contentsChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const selectMember = (e) => {
    setMember(e.target.value);
  };

  return (
    <>
      <StTop>
        <StHeader>에스파 팬레터 콜렉션</StHeader>;
        <StUl>
          {/* option으로 주면 value없어도 클릭시마다 데이터뜸 button은 value를 넣어줘야함 클릭한 태그 */}
          <StLi
            $isActive={clicked === "카리나"}
            onClick={ClickPerson}
            value="카리나"
          >
            카리나
          </StLi>
          <StLi
            $isActive={clicked === "윈터"}
            onClick={ClickPerson}
            value="윈터"
          >
            윈터
          </StLi>
          <StLi
            $isActive={clicked === "닝닝"}
            onClick={ClickPerson}
            value="닝닝"
          >
            닝닝
          </StLi>
          <StLi
            $isActive={clicked === "지젤"}
            onClick={ClickPerson}
            value="지젤"
          >
            지젤
          </StLi>
        </StUl>
      </StTop>
      <StForm onSubmit={Enroll}>
        {/* <StForm onSubmit={() => Enroll()}> */}
        <StSection>
          <StNickname>닉네임:</StNickname>
          <StInput
            type="text"
            value={nickname}
            onChange={nickNameChangeHandler}
            placeholder="최대 20글자까지 작성할 수 있습니다"
            maxLength={"20"}
          />
        </StSection>
        <StSection>
          <StContents>내용:</StContents>
          <StTextarea
            type="text"
            value={content}
            placeholder="최대 100글자까지 작성할 수 있습니다"
            onChange={contentsChangeHandler}
            maxLength={"100"}
          />
        </StSection>
        <StSelectWrap>
          누구에게 보내실 건가요?
          <select onChange={selectMember}>
            <option value="카리나">카리나</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
            <option value="지젤">지젤</option>
          </select>
        </StSelectWrap>
        <StButtonDiv>
          <StButton>팬레터 등록</StButton>
        </StButtonDiv>
      </StForm>

      <div>
        {reduxfilteredData.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: "black",
              }}
            >
              <Link to={`/detail/${item.id}`}>
                <StFeedSection>
                  <StCard>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "500px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          marginRight: "20px",
                        }}
                        src={`${item.avatar}`}
                        alt="유저 프로필 이미지"
                      />
                      <StFeedNicknameDate>
                        <div>{item.nickname}</div>
                        <div>{item.createdAt}</div>
                      </StFeedNicknameDate>
                    </div>
                    <StFeedContent>{item.content}</StFeedContent>
                  </StCard>
                </StFeedSection>
              </Link>
            </div>
          );
        })}
        {reduxfilteredData.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "500px",
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "5px",
              margin: "0px auto",
              color: "white",
            }}
          >
            {`${clicked}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
            되주세요`}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Form;
