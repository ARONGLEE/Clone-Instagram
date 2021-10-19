import React from "react";
import Post from "../components/Post";

const PostList = (props) => {

  return (
    <React.Fragment>
      <div style={{background: "#fafafa"}}>
        <Post />
        <Post />
        <Post />
      </div>
    </React.Fragment>
  )
};

export default PostList;
