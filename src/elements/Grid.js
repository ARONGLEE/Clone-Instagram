import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    //아영 - 박스라인 필요 추가
    border,
    padding,
    margin,
    bg,
    children,
    center,
    _onClick,
    //아영 - 추가
    justifyContent,
    borderRadius,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    padding: padding,
    margin: margin,
    //아영 - 박스라인 필요 추가
    border: border,
    bg: bg,
    center: center,
    justifyContent: justifyContent,
    borderRadius: borderRadius,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  //아영 - 추가
  border: false,
  justifyContent: false,
  borderRadius: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  //아영 - 박스라인 필요 추가
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content: center;`
      : ""}
    ${(props) => (props.center ? `text-align: center` : "")}
    //아영 - 추가
    ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""}
    ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;
export default Grid;
