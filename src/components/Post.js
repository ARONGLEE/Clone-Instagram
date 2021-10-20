import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Button, Grid, Image, Text } from "../elements";
import Modal from "./Modal";
import CommentWrite from "./CommentWrite";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";

const Post = (props) => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = React.useState(false);
  const [like, setLike] = React.useState(false);

  return (
    <React.Fragment>
      <Border>
        {/* 프로필사진, 아이디, 설정버튼 */}
        <Grid
          is_flex
          justifyContent="space-between"
          height="41px"
          padding="5px 4px 5px 8px"
        >
          <Grid is_flex width="auto">
            <Image shape="circle" size="32" margin="0px" src={props.src} />
            <Text bold size="14px" margin="6px">
              {props.userId}
            </Text>
          </Grid>
          <Button
            width="20px"
            size="14px"
            padding="0px"
            bg="#fff"
            color="#000"
            className="openModalBtn"
            _onClick={() => {
              setModalOpen(true);
            }}
          >
            ···
          </Button>
        </Grid>

        {/* 사진 */}
        <Grid>
          <Image shape="rectangle" src={props.postImg} />
        </Grid>

        {/* 하트, 상세페이지, 보내기 아이콘 */}
        <Grid padding="3px">
          {like ? (
            <IconButton
              onClick={() => {
                setLike(false);
              }}
            >
              <FavoriteIcon color="success" />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setLike(true);
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}

          <IconButton>
            <ModeCommentIcon />
          </IconButton>

          <IconButton>
            <SendIcon />
          </IconButton>
        </Grid>

        {/* 좋아요, 내용, 시간 */}
        <Text margin="0px 8px" bold size="14px" style={{ fontWeight: "600" }}>
          좋아요 {like ? props.comment_cnt + 1 : props.comment_cnt}개
        </Text>
        <Div>
          <Text bold size="14px" margin="8px 8px">
            {props.userId}
          </Text>
          <Text bold size="14px" margin="8px 8px">
            {props.postContents}
          </Text>
        </Div>

        {/* 댓글 */}
        <CommentWrite />
      </Border>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </React.Fragment>
  );
};

// 부모에서 프롭스 못받을때 오류나 화면 깨짐 방지
Post.defaultProps = {
  userId: "jinsik",
  // user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png'
  postImg:
    "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
	postContents: "배경 내용이 들어가요",
  comment_cnt: 0,
  insert_dt: "2021-09-30 10:00:00",
  is_like: true,
};

export default Post;

const Border = styled.div`
  width: 614px;
  margin: auto;
  border: 1px solid #dee2e6;
  border-radius: 3px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const Div = styled.div`
  display: flex;
`;
