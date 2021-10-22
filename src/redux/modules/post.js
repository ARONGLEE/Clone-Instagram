import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import { commentCreators } from "./comment";

import { apis } from "../../shared/api";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
// const LOADING = "LOADING";

// 좋아요 토글하기 액션
const LIKE_TOGGLE = "LIKE_TOGGLE";

const getPost = createAction(GET_POST, (post_list, post_like) => ({
  post_list,
  post_like,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// 좋아요 토글 액션 생성자
const likeToggle = createAction(LIKE_TOGGLE, (postId, likeState = null) => ({
  postId,
  likeState,
}));

// 초기값
const initialState = {
  list: [],
  post_like: [],
  likeState: false,
};

// 미들웨어
const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost(getPost())
      .then((res) => {
        //console.log(res.data);
        const post_list = res.data.result;
        const post_like = res.data.likes;
        dispatch(getPost(post_list, post_like));
        console.log("post_like", post_like);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addLikeAPI = (postId, likeState) => {
  return function (dispatch, getState, { history }) {
    console.log("likeState", likeState);
    apis
      .addLike(postId)
      .then((res) => {
        // console.log(res);
        window.location.reload();
        dispatch(likeToggle(postId, likeState));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteToggleAPI = (postId, likeState) => {
  return function (dispatch, getState, { history }) {
    console.log("likeState", likeState);
    apis
      .deleteLike(postId)
      .then((res) => {
        // console.log(res);
        window.location.reload();
        dispatch(likeToggle(postId, likeState));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deletePostDB = (postId) => {
  return function (dispatch, { history }) {
    apis
      .delPost(postId)
      .then((res) => {
        // console.log(res);
        dispatch(deletePost(postId));
        // window.alert(res.msg);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const LikeToggleAPI = (postId, likeState) => {
// 	return function (dispatch, getState, {history}) {
//         // // post를 찾기 위해, 배열의 몇 번째에 있나 확인
//         // const _post_idx = getState().post.post_like.findIndex((p) => p.postId === postId);
//         // // 확인한 인덱스로 수정하려는 게시글의 수정 전 정보를 가져오기
//         // const _post = getState().post.post_like[_post_idx];
// 		console.log("likeState", likeState)
// 		if (likeState) {
// 			apis
// 				.addLike(postId)
// 				.then((res) => {
// 					// console.log(res);
// 					dispatch(likeToggle(postId, likeState))
// 					window.location.reload();
// 				})
// 				.catch((err) => {
// 					console.log(err)
// 				});
// 		} else {
// 			apis
// 				.deleteLike(postId)
// 				.then((res) => {
// 					// console.log(res);
// 					dispatch(likeToggle(postId, likeState))

// 				})
// 				.catch((err) => {
// 					console.log(err)
// 				});
// 		}

// 	}
// }

// 리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        draft.post_like = action.payload.post_like;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.postId === action.payload.post_id
        );
        // console.log(idx);
        if (idx !== -1) {
          draft.list.splice(idx, 1);
        }
      }),
    [LIKE_TOGGLE]: (state, action) =>
      produce(state, (draft) => {
        // 배열에서 몇 번째에 있는 지 찾은 다음, is_like를 action에서 가져온 값으로 바꾸기!
        let idx = draft.post_like.findIndex(
          (p) => p.postId === action.payload.post_id
        );
        // draft.list[idx].likeState = action.payload.likeState.likeState;
        draft.post_like = action.payload.post_like;
      }),
  },
  initialState
);

const postActions = {
  getPostAPI,
  // LikeToggleAPI,
  deleteToggleAPI,
  addLikeAPI,
  deletePostDB,
};

export { postActions };
