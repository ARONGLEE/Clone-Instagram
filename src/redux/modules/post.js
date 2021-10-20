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
const likeToggle = createAction(LIKE_TOGGLE, (post_id, is_like = null) => ({
  is_like,
}));

const initialState = {
	list: [ 1, 2, 3],

};

const initialPost = {
	user_info: {
		user_name: 'jinsik',
		// user_profile: 'https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png'
	},
	image_url: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg',
	contents: '배경 내용이 들어가요',
	comment_cnt: 10,
	insert_dt: '2021-09-30 10:00:00',
	is_like: true,
}


// 리듀서
export default handleActions(
	{
		[SET_POST]: (state, action) => produce(state, (draft) => {

		}),
		[LIKE_TOGGLE]: (state, action) => 
		produce(state, (draft) => {

			// 배열에서 몇 번째에 있는 지 찾은 다음, is_like를 action에서 가져온 값으로 바꾸기!
			let idx = draft.list.findIndex((p) => p.id === action.payload)

			draft.list[idx].is_like = action.payload.is_like;
		}),
	},
	initialState
);

const postActions = {
	setPost, 
	likeToggle,
}

export {postActions}