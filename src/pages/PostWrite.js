import React, { useRef, useState } from "react";

import { Button, Grid, Input, Image, Text } from "../elements";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { imageCreators } from "../redux/modules/image";

import axios from "axios";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  console.log(preview);
  const { history } = props;

  //const [selectedImage, setSelectedImage] = useState();
  const [content, setContent] = useState("");

  const fileInput = useRef();
  console.log(fileInput);

  //파일 미리보기
  const filePreview = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // console.log(reader.result);
      dispatch(imageCreators.setPreview(reader.result));
    };
  };
  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };
  // const removeSelectedImage = () => {
  //   setSelectedImage();
  // };

  const fileUploadHandler = () => {
    const file = fileInput.current.files[0];
    console.log("file", file);
    const formData = new FormData();
    formData.append("img", file);
    formData.append("postContents", content);
    console.log("formData", formData);

    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .create({
        baseURL: "http://13.125.63.44",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .post("/api/posts/create", formData, {})
      .then((res) => {
        console.log(res);
        history.push("/");
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Grid
        width="30%"
        border="1px solid #DCDCDC"
        height="100%"
        margin="0px auto"
        padding="0px 0px"
        bg="#ffffff"
      >
        <Text bold center size="16px" padding="12px">
          게시물 작성
        </Text>
        <Grid width="100%" border="1px solid #DCDCDC" padding="40px 40px">
          <Grid>
            <label htmlFor="fileUpload">
              <Image
                shape="rectangle"
                src={preview ? preview : "http://via.placeholder.com/400x300"}
                width="330px"
              />
            </label>
            {/* <Text padding="10px" bold>
              {props.user_info.user_name}
            </Text> */}
            <input
              type="file"
              ref={fileInput}
              id="fileUpload"
              onChange={filePreview}
            />
          </Grid>
          {/* <form
            action="/api/posts/create"
            method="post"
            enctype="multipart/form-data"
          > */}
          {/* <Grid padding="30px 0 0 0"> */}
          {/* {selectedImage && (
              <div style={styles.preview}>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  style={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage} style={styles.delete}>
                  첨부 이미지 삭제
                </button>
              </div>
            )} */}
          {/* </Grid> */}
          <Grid padding="40px 0">
            <Input
              multiLine
              placeholder="문구입력..."
              value={content}
              _onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Grid>
          <Button _onClick={fileUploadHandler}>공유하기</Button>
          {/* </form> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// PostWrite.defaultProps = {
//   user_info: {
//     user_name: "mingab",
//     // user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png'
//   },
//   image_url:
//     "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
//   contents: "배경 내용이 들어가요",
//   comment_cnt: 10,
//   insert_dt: "2021-09-30 10:00:00",
// };

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "rgb(239,239,239)",
    color: "black",
    border: "none",
  },
};

export default PostWrite;
