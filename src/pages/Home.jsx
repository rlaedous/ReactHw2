import React, { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import FeedList from "../components/FeedList";
import uuid from "react-uuid";
import { fakeData } from "../shared/fakeData";
function Home() {
  // const [clickPerson, setClickPerson] = useState();
  // console.log(feed);
  // console.log(fakeData);
  // const ClickPerson = (writedTo) => {
  //   const filterperson = feed.filter((item) => item.writedTo === writedTo);

  //   setClickPerson((prev) => [{ ...prev, filterperson }]);
  // };
  // const [member, setMember] = useState("카리나");

  // const filterMember = feed.map((item) => item.writedTo);
  // console.log(filterMember);
  return (
    <>
      {/* <Header
        feed={feed}
        setFeed={setFeed}
        filterMember={filterMember}
        setMember={setMember}
        fakeData={fakeData}
      /> */}
      <Form
        // setFeed={setFeed}
        fakeData={fakeData}
        // setMember={setMember}
        // feed={feed}
      />
      {/* <FeedList feed={feed} setFeed={setFeed} /> */}
    </>
  );
}

export default Home;
