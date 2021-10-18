import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    cursor,
    //아영 - 배경컬러 추가
    bg,
    //진식 - 폰트컬러 추가
    color,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    cursor: cursor,
    //아영 - 배경컬러 추가
    bg: bg,
    //진식 - 폰트컬러 추가
    color: color,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  //아영 - 배경컬러 추가
  bg: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  //아영 - 배경컬러 추가
  background-color: ${(props) => props.bg};
  //진식 - 폰트컬러 추가
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
  font-family: "Gowun Batang", serif;
  font-weight: bold;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ffb838;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50px;
  vertical-align: middle;
  cursor: pointer;
`;
export default Button;
