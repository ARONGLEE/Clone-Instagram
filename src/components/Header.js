import React from "react";
import { Grid, Text } from "../elements";

import imgLogo from "../shared/instagram-logo.png";
import imgProfile from "../shared/profile.PNG";
import { BiSearch } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { TiCompass } from "react-icons/ti";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { CgAddR } from "react-icons/cg";

import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #dcdcdc",
        }}
      >
        <div
          style={{
            maxWidth: "975px",
            margin: "0px auto",
          }}
        >
          <Grid is_flex center>
            <img src={imgLogo} style={{ width: "103px" }} />
            <Grid
              is_flex
              border="1px solid #DCDCDC"
              width="215px"
              margin="7px auto"
              padding="5px"
              borderRadius="3px"
              bg="#fafafa"
            >
              <BiSearch style={{ color: "#8e8e8e" }} />
              <Text color="#8e8e8e">검색</Text>
            </Grid>
            <Grid is flex width="260px" justifyContent="space-evenly">
              <MdHomeFilled style={{ fontSize: "22px", margin: "5px 5px" }} />
              {/* <RiSendPlaneFill
                style={{ fontSize: "22px", margin: "7px 10px" }}
              /> */}
              <CgAddR
                onClick={() => {
                  history.push("/write");
                }}
                cursor="pointer"
                style={{ fontSize: "22px", margin: "5px 5px" }}
              />
              <TiCompass style={{ fontSize: "22px", margin: "5px 5px" }} />
              <IoMdHeartEmpty style={{ fontSize: "22px", margin: "5px 5px" }} />
              <img
                src={imgProfile}
                style={{ width: "22px", margin: "5px 5px" }}
              />
              <GrLogout
                style={{ fontSize: "22px", margin: "5px 5px" }}
                onClick={() => {
                  dispatch(userCreators.logOutDB());
                }}
                cursor="pointer"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
