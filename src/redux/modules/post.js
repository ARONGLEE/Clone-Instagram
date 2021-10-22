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

const getPost = createAction(GET_POST, (post_list, post_like) => ({ post_list, post_like }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
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


//게시글하나에 들어가야할 기본내용
// const initialPost = {
//   user_info: {
// 		userId: "",
//     profileImg:
//       "https://filminvalle.com/wp-content/uploads/2019/10/User-Icon.png",
//   },
// 	postId: "",
//   image_url:
//       "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wheat-field-picture.jpg",
// 	postContents: "",
//   likeNum: 0,
//   // comment_cnt: 10,
//   insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
// };

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
<<<<<<< HEAD
				// console.log("",res)
=======
				console.log("불러오기",res)
>>>>>>> 0044a47 (최신화 떄문에 커밋)
        // console.log(res.data.result);
        const post_list = res.data.result;
				const post_like = res.data.likes;
        dispatch(getPost(post_list, post_like));
				console.log("post_like", post_like)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



// const addLikeAPI = (postId, likeState) => {
// 	return function (dispatch, getState, {history}) {
// 		console.log("likeState", likeState)
// 		apis
// 			.addLike(postId)
// 			.then((res) => {
// 				// console.log(res);
// 				// window.location.reload();
// 				dispatch(likeToggle(postId, likeState))
// 			})
// 			.catch((err) => {
// 				console.log(err)
// 			});
// 		}
// }


// const deleteToggleAPI = (postId, likeState) => {
// 	return function (dispatch, getState, {history}) {
// 		console.log("likeState", likeState)
// 		apis
// 			.deleteLike(postId)
// 			.then((res) => {
// 				// console.log(res);
// 				// window.location.reload();
// 				dispatch(likeToggle(postId, likeState))
// 			})
// 			.catch((err) => {
// 				console.log(err)
// 			});
// 		}
// }


const LikeToggleAPI = (postId, likeState) => {
	return function (dispatch, getState, {history}) {
		console.log("likeState", likeState)
		if (likeState) {
			apis
				.addLike(postId)
				.then((res) => {
					// console.log(res);
					dispatch(likeToggle(postId, likeState))
					window.location.reload();
				})
				.catch((err) => {
					console.log(err)
				});
		} else {
			apis
				.deleteLike(postId)
				.then((res) => {
					// console.log(res);
					dispatch(likeToggle(postId, likeState))
					
				})
				.catch((err) => {
					console.log(err)
				});
		}
			
	}
}

<<<<<<< HEAD
=======

<<<<<<< HEAD
const likeNumAPI = (postId) => {
	return function (dispatch, getState, {history}) {
		// const post_list = getState().post.list;
		// console.log("getState", post_list)
		apis
			.likeNum(postId)
			.then((res) => {
				console.log(`${postId} likeNumAPI갯수`,res.data.result)
				// console.log("likeNumAPI",res)
				// for(let i=0; i<)
				const likeNum = res.data.result
				dispatch(likeNumber(likeNum))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
>>>>>>> 0044a47 (최신화 떄문에 커밋)


=======
>>>>>>> 929a251 (최신화 하려고 커밋함)

// 리듀서
export default handleActions(
	{
		[GET_POST]: (state, action) => produce(state, (draft) => {
			draft.list = action.payload.post_list;
			draft.post_like = action.payload.post_like;
		}),

		[LIKE_TOGGLE]: (state, action) => 
		produce(state, (draft) => {
			// 배열에서 몇 번째에 있는 지 찾은 다음, is_like를 action에서 가져온 값으로 바꾸기!
			let idx = draft.list.findIndex((p) => p.postId === action.payload.post_id);
			draft.list[idx].likeState = action.payload.likeState.likeState;
		}),
<<<<<<< HEAD

<<<<<<< HEAD
=======
		[LIKE_NUM]: (state, action) => produce(state, (draft) => {
			draft.likeNum = action.payload.likeNum;
		})
>>>>>>> 0044a47 (최신화 떄문에 커밋)
=======
>>>>>>> 929a251 (최신화 하려고 커밋함)
	},
	initialState
);

const postActions = {
	getPostAPI, 
	LikeToggleAPI,
	// deleteToggleAPI,
	// addLikeAPI

}

export { postActions };
