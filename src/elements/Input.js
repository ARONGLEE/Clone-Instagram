import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";
const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    //아영 - 추가
    width,
    margin,
    padding,
    borderRadius,
    height,
    color,
    bg,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        <Text margin="0px">{label && <Text margin="0px">{label}</Text>}</Text>
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }
  //아영 - 추가
  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    borderRadius: borderRadius,
    height: height,
    color: color,
    bg: bg,
  };

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            //아영 - {...styles} 추가
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "텍스트를 입력해주세요.",
  //콜백함수
  _onChange: () => {},
  value: "",
  multiLine: false,
  is_submit: false,
  onSubmit: () => {},
  //아영 - width, margin, padding, borderRadius, height, color 추가
  width: false,
  margin: false,
  padding: false,
  borderRadius: false,
  height: false,
  color: false,
  bg: false,
};

const ElInput = styled.input`
  box-sizing: border-box;
  // 아영 - 수정 & 추가
  border: 1px solid #dbdbdb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  ${(props) =>
    props.borderRadius
      ? `border-radius: ${props.borderRadius};`
      : "border-radius: 3px;"}
  color: ${(props) => props.color};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
`;

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    height: 
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
