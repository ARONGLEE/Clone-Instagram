import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

/// comments

const SET_COMMENT = "SET_COMMENT";
const LOADING = "LOADING";
const COMMENTCREATE = "comment/CREATE";

//action creators

const createComment = createAction(COMMENTCREATE, (comment) => ({ comment }));
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

//   const initialState = {
//     comment_list: [],
//     is_loading: false,
//   };

const initialState = {
  list: [],
  is_loading: false,
};

// middleware actions
const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    apis
      .getComment(postId)
      .then((res) => {
        const comment_list = [];
        //const data = res.data;
        // {
        //   data.map((list) => {
        //     comment_list.push(list.comment);
        //   });
        // }

        for (const i in res.data.result) {
          //console.log(res.data.result[i].comment);
          comment_list.unshift(res.data.result[i]);
          //console.log(comment_list);
          // dispatch(setComment());
        }
        //const abc = JSON.stringify(comment_list);
        // dispatch(setComment(abc));
        //console.log(res.data.result);
        //const list = [];

        //history.replace("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const createCommentDB = (postId, comment) => {
  return function (dispatch, getState, { history }) {
    // const comment = {
    // 	comment:comment
    // }
    apis
      .addComment(postId, comment)
      .then((res) => {
        console.log(res);
        console.log(res.data.result.comment);
        const comment = res.data.result.comment;
        dispatch(createComment(comment));
        // const newComment = res.data
        // dispatch(createComment(index,newComment))
        // dispatch(loadBoardDB())
        // dispatch(detailArticleDB(postId))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list = action.payload.comment_list;
        draft.is_loading = false;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
    [COMMENTCREATE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment);
      }),
  },
  initialState
);

const commentActions = {
  createCommentDB,
  getCommentDB,
  setComment,
  loading,
};

export { commentActions };
