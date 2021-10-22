import React from "react";
import { Text } from "../elements";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { commentCreators } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  //   const comment_list = useSelector((state) => state.comment.list);

  //   React.useEffect(() => {
  //     if (!comment_list) {
  //       dispatch(commentCreators.getCommentDB());
  //     }
  //   }, []);

  return (
    <React.Fragment>
      <Div>
        <Text bold size="12px" margin="8px 8px">
          {props.repliyId}
        </Text>
        <Text size="14px" margin="7px 0px">
          {props.comment}
        </Text>
      </Div>
    </React.Fragment>
  );
};

export default CommentList;

const Div = styled.div`
  display: flex;
`;
