import React from "react";
import Post from "../components/Post";

import Header from "../components/Header";

const PostList = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ background: "#fafafa" }}>
        <Post />
        <Post />
        <Post />
      </div>
    </React.Fragment>
  );
};

export default PostList;
