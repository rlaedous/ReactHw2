import React, { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/modules/leteer";
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
  margin: 20px;
`;
const StFeedNicknameDate = styled.div`
  display: flex;
  flex-direction: column;
`;
const StFeedNickname = styled.div``;
const StFeedDate = styled.div``;
const StFeedContent = styled.div``;

function Form() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [clicked, setClicked] = useState("카리나");

  const avatar = "";
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
      avatar,
      writedTo: member,
      id: uuid(),
    };
    // setFeed((prev) => [...prev, newFeed]);
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
    console.log(e.target.value);
    setMember(e.target.value);
  };

  // useEffect(() => {
  //   console.log("reduxPrac", reduxPrac);
  //   console.log("reduxfilteredData", reduxfilteredData);
  // }, [reduxfilteredData]);
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
          console.log(reduxfilteredData);
          console.log(item);
          return (
            <div key={item.id} style={{ border: "1px solid red" }}>
              <Link to={`/detail/${item.id}`}>
                <StFeedSection>
                  <div style={{ backgroundColor: "red", flexDirection: "row" }}>
                    <img src={`${item.avatar}`} alt="유저 프로필 이미지" />
                    <StFeedNicknameDate>
                      <StFeedNickname>{item.nickname}</StFeedNickname>
                      <StFeedDate>{item.createdAt}</StFeedDate>
                    </StFeedNicknameDate>
                  </div>
                  <StFeedContent>{item.content}</StFeedContent>
                </StFeedSection>
              </Link>
            </div>
          );
        })}
        {reduxfilteredData.length === 0 ? <>데이터가없습니다</> : null}
      </div>
    </>
  );
}

export default Form;
