import { createAction, handleActions } from "redux-actions";
import produce, { Produce } from "immer";
import "moment";
import moment from "moment";

import { apis } from "../../shared/api";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
// const LOADING = "LOADING";

// 좋아요 토글하기 액션
const LIKE_TOGGLE = "LIKE_TOGGLE";
const LIKE_NUM = "LIKE_NUM";

const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// 좋아요 토글 액션 생성자
const likeToggle = createAction(LIKE_TOGGLE, (postId, is_like = null) => ({
	postId,
  is_like,
}));

const likeNum = createAction(LIKE_NUM, (post_id) => ({ post_id }));

const initialState = {
	list: [
		{
			// userId: "jinsik",
			// // user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png',
			// postImg:
			// 	"https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
			// postContents: "",
			// comment_cnt: 0,
			// insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
			// is_like: false,
			// likeNum: 0
		}
	],
};

// const initialPost = {
//   userId: "jinsik",
//   // user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png'
//   postImg:
//     "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
// 	postContents: "",
//   comment_cnt: 0,
//   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
//   is_like: false,
//   likeNum: 0
// }


// 미들웨어
const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost(getPost())
      .then((res) => {
				// console.log("",res)
        // console.log(res.data.result);
        const post_list = res.data.result;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const LikeToggleAPI = (postId, is_like) => {
	return function (dispatch, getState, {history}) {
		console.log("is_like", is_like)
		if (is_like) {
			apis
				.addLike(postId)
				.then((res) => {
					// console.log(res);
					dispatch(likeToggle(postId, is_like))
				})
				.catch((err) => {
					console.log(err)
				});
		} else {
			apis
				.delteLike(postId)
				.then((res) => {
					// console.log(res);
					dispatch(likeToggle(postId, is_like))
				})
				.catch((err) => {
					console.log(err)
				});
		}
			
	}
}




// 리듀서
export default handleActions(
	{
		[GET_POST]: (state, action) => produce(state, (draft) => {
			draft.list = action.payload.post_list;
		}),

		[LIKE_TOGGLE]: (state, action) => 
		produce(state, (draft) => {
			// 배열에서 몇 번째에 있는 지 찾은 다음, is_like를 action에서 가져온 값으로 바꾸기!
			let idx = draft.list.findIndex((p) => p.postId === action.payload.postId);
			if (action.payload.is_like) {
				draft.list[idx].likeNum = draft.list[idx].likeNum + 1;
				draft.list[idx].is_like = true;
			} else {
				draft.list[idx].likeNum = draft.list[idx].likeNum - 1;
				draft.list[idx].is_like = false;
			}
			// draft.list[idx].is_like = action.payload.is_like;
		}),

	},
	initialState
);

const postActions = {
	getPostAPI, 
	LikeToggleAPI,
}

export { postActions };
