import React from "react";
import { Button, Grid, Input, Text } from "../elements";

import img from "../shared/appleapp.PNG";
import image from "../shared/googleapp.PNG";
import imgLogo from "../shared/instagram-logo.png";
import { AiFillFacebook } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [name, setName] = React.useState("");
  const [nick, setNick] = React.useState("");

  // const user_data = {
  //   userId: id,
  //   userPw: pw,
  //   userName: name,
  //   userNameId: nick,
  // };

  const signup = () => {
    dispatch(userCreators.signupDB(id, pw, name, nick));
  };

  return (
    <React.Fragment style={{ backgroundColor: "#fafafa" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Grid
          border="1px solid #DCDCDC"
          width="350px"
          height="100%"
          margin="0px auto"
          padding="10px 0px"
          center
          bg="#ffffff"
        >
          <Grid>
            <img src={imgLogo} style={{ width: "175px" }}></img>
          </Grid>
          <Text
            borderRadius="3px"
            margin="18px 0px"
            color="#8e8e8e"
            bold
            size="18px"
            padding="0px 40px"
          >
            친구들의 사진과 동영상을 보려면 가입하세요.
          </Text>
          <Grid bg="#0095f6" width="268px" margin="18px auto" is_flex>
            <AiFillFacebook color="#ffffff" />
            <Text size="14px" padding="5px 0px" color="#ffffff" bold>
              Facebook으로 로그인
            </Text>
          </Grid>
          <Grid margin="10px 0px 18px 0px">
            <Text color="#8e8e8e" bold size="13px">
              ――――――――― 또는 ―――――――――
            </Text>
          </Grid>
          {/* 아이디 */}
          <Grid margin="0px 0px 6px 0px">
            <Input
              width="268px"
              padding="10px"
              bg="#fafafa"
              placeholder="휴대폰 번호 또는 이메일 주소"
              _onChange={(e) => setId(e.target.value)}
            />
          </Grid>
          {/* 이름 */}
          <Grid margin="0px 0px 6px 0px">
            <Input
              width="268px"
              padding="10px"
              bg="#fafafa"
              placeholder="성명"
              _onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          {/* 닉네임 */}
          <Grid margin="0px 0px 6px 0px">
            <Input
              width="268px"
              padding="10px"
              bg="#fafafa"
              placeholder="사용자 이름"
              _onChange={(e) => setNick(e.target.value)}
            />
          </Grid>
          {/* 비밀번호 */}
          <Grid margin="0px 0px 6px 0px">
            <Input
              width="268px"
              padding="10px"
              color="#8e8e9b"
              type="password"
              bg="#fafafa"
              placeholder="비밀번호"
              _onChange={(e) => setPw(e.target.value)}
            />
          </Grid>

          <Grid margin="14px 0px">
            <Button
              color="#ffffff"
              size="14px"
              width="268px"
              bg="#0095f6"
              padding="5px 0px"
              _onClick={signup}
            >
              가입
            </Button>
          </Grid>
        </Grid>

        <Grid
          center
          margin="10px auto"
          border="1px solid #DCDCDC"
          width="350px"
          bg="#ffffff"
          padding="10px 0px"
        >
          <Text margin="10px 0px">
            계정이 있으신가요?{" "}
            <a
              href="login"
              style={{
                textDecoration: "none",
                color: "#0095f6",
                fontWeight: "bold",
              }}
            >
              로그인
            </a>
          </Text>
        </Grid>
        <Grid center>
          <Text margin="10px 0px">앱을 다운로드하세요.</Text>
          <Grid margin="20px 0px">
            <img src={img} style={{ width: "136px" }} />
            <img src={image} style={{ width: "136px" }} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
