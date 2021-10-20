import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import { postActions } from "../redux/modules/post";

// import Header from "../components/Header";

const PostList = (props) => {

  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log("post_list", post_list);

  React.useEffect(() => {
    dispatch(postActions.getPostAPI());
  }, []);

  return (
    <React.Fragment>
      <Header />
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default PostList;
