import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const dispatch = useDispatch();

  const [comment_text, setComment_text] = useState("");
  const [able, setAble] = useState(false);

  const writeComment = useSelector((state) => state.comment.list);
  console.log("writeComment", writeComment);

  console.log("props.postId", props.postId);

  const onChanged = (e) => {
    setComment_text(e.target.value);
    if (e.target.value === "") {
      setAble(false);
    } else {
      setAble(true);
    }
  };

  const write = () => {
    // console.log(comment_text);
    dispatch(commentActions.createCommentDB(props.postId, comment_text));
    setComment_text("");
  };

  // const board_list = useSelector((state) => state.board.list);

  // useEffect(() => {
  //     dispatch(apis.loadBoardDB());
  // },[])

  return (
    <React.Fragment>
      <Grid is_flex width="97%" height="55px" margin="0px auto">
        <Emote>
          <svg
            aria-label="이모티콘"
            class="_8-yf5 "
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
            <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
          </svg>
        </Emote>
        <textarea
          style={{
            flexGrow: "1",
            fontSize: "inherit",
            height: "18px",
            maxHeight: "80px",
            outline: "0",
            padding: "0",
            resize: "none",
            border: "0px",
          }}
          type="text"
          onChange={onChanged}
          value={comment_text}
          placeholder="댓글 달기..."
        />
        {able ? (
          <Offbutton onClick={write}>게시</Offbutton>
        ) : (
          <Onbutton onClick={write}>게시</Onbutton>
        )}
      </Grid>
    </React.Fragment>
  );
};

const Onbutton = styled.button`
  color: rgba(var(--d69, 0, 149, 246), 1);
  display: inline;
  padding: 0;
  position: relative;
  border: 0px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  pointer-events: none;
  opacity: 0.3;
  background: 0 0;
  font-weight: 600;
`;

const Offbutton = styled.button`
  color: rgba(var(--d69, 0, 149, 246), 1);
  display: inline;
  padding: 0;
  position: relative;
  border: 0px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  // pointer-events: none;
  // opacity: .3;
  background: 0 0;
  font-weight: 600;
`;

const Emote = styled.div`
  // display:flex
  padding: 8px 16px 8px 0;
`;

export default CommentWrite;
