import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    //아영 - 패팅추가
    padding,
    children,
    margin,
    cursor,
    _onClick,
    //아영 - 추가
    center,
  } = props;

  const styles = {
    bold: bold,
    cursor: cursor,
    color: color,
    size: size,
    margin: margin,
    //아영 - 추가
    center: center,
    padding: padding,
  };
  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  cursor: false,
  _onClick: () => {},
  //아영 - 추가
  center: false,
  padding: false,
};

const P = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  cursor: pointer;
  // font-family: "Gowun Batang", serif;
  //아영 - 추가
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
`;
export default Text;
