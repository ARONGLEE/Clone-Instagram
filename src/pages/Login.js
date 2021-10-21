import React from "react";
import { Button, Grid, Input, Text } from "../elements";

import imgApple from "../shared/appleapp.PNG";
import imaGoogle from "../shared/googleapp.PNG";
import imgLogo from "../shared/instagram-logo.png";
import { AiFillFacebook } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  // console.log(localStorage.getItem("token"));
  const login = () => {
    dispatch(userCreators.setLoginDB(id, pw));
  };
  return (
    <React.Fragment>
      <Grid
        border="1px solid #DCDCDC"
        width="350px"
        height="100%"
        margin="0px auto"
        padding="10px 0px"
        bg="#ffffff"
        center
      >
        <Grid margin="12px auto">
          <img src={imgLogo} style={{ width: "175px" }}></img>
        </Grid>

        {/* 아이디 */}
        <Grid margin="36px 0px 6px 0px">
          <Input
            width="268px"
            padding="10px"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            bg="#fafafa"
            _onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        {/* 비밀번호 */}
        <Grid margin="0px 0px 14px 0px">
          <Input
            width="268px"
            padding="10px"
            type="password"
            placeholder="비밀번호"
            bg="#fafafa"
            _onChange={(e) => setPw(e.target.value)}
          />
        </Grid>

        <Grid margin="8px 0px">
          <Button
            color="#ffffff"
            size="14px"
            width="268px"
            bg="#0095f6"
            padding="5px 0px"
            _onClick={login}
          >
            로그인
          </Button>
        </Grid>

        <Grid margin="10px 0px 18px 0px">
          <Text color="#8e8e8e" bold size="13px">
            ――――――――― 또는 ―――――――――
          </Text>
        </Grid>

        <Grid margin="8px 0px 26px 0px" is_flex>
          <AiFillFacebook color="#385185" />
          <Text color="#385185" bold>
            Facebook으로 로그인
          </Text>
        </Grid>
        <Grid margin="12px 0px">
          <Text>비밀번호를 잊으셨나요?</Text>
        </Grid>
      </Grid>
      <Grid
        center
        margin="10px auto"
        border="1px solid #DCDCDC"
        width="350px"
        padding="10px 0px"
        bg="#ffffff"
      >
        <Text margin="10px 0px">
          계정이 없으신가요?{" "}
          <a
            href="singup"
            style={{
              textDecoration: "none",
              color: "#0095f6",
              fontWeight: "bold",
            }}
          >
            가입하기
          </a>
        </Text>
      </Grid>
      <Grid center>
        <Text margin="10px 0px">앱을 다운로드하세요.</Text>
        <Grid margin="20px 0px">
          <img src={imgApple} style={{ width: "136px" }} />
          <img src={imaGoogle} style={{ width: "136px" }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
