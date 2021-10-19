import { createAction, handleActions } from "redux-actions";
import produce, { Produce } from "immer";
import "moment";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
// const LOADING = "LOADING";

// 좋아요 토글하기 액션
const LIKE_TOGGLE = "LIKE_TOGGLE";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));


// 좋아요 토글 액션 생성자
export const likeToggle = createAction(LIKE_TOGGLE, (post_id, is_like = null) => ({
  post_id,
  is_like,
}));

const initialState = {
	list: [
		
	],
  // paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

const initialPost = {
	image_url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
	contents: "",
	like_cnt: 0,
	is_like: false,
	insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
}


// 리듀서
export default handleActions(
	{
		[LIKE_TOGGLE]: (state, action) => 
		produce(state, (draft) => {

			// 배열에서 몇 번째에 있는 지 찾은 다음, is_like를 action에서 가져온 값으로 바꾸기!
			let idx = draft.list.findIndex((p) => p.id === action.payload)

			draft.list[idx].is_like = action.payload.is_like;
		}),
	},
	initialState
);