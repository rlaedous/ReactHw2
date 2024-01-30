import React from "react";
import Feed from "./Feed";
function FeedList({ feed, setFeed }) {
  return (
    <>
      <Feed feed={feed} setFeed={setFeed} />
    </>
  );
}

export default FeedList;
