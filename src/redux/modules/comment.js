import { createAction, handleActions } from "redux-actions";
import produce, { Produce } from "immer";
import { apis } from "../../shared/api";

/// comments
const COMMENTLOAD = 'comment/LOAD';
const COMMENTDELETE = 'comment/DELETE';
const COMMENTCREATE = 'comment/CREATE';

/// comments
const loadComment = createAction(COMMENTLOAD, (comments) => ({comments}));
const createComment = createAction(COMMENTCREATE, (index,newComment) => ({index,newComment}));
const deleteComment = createAction(COMMENTDELETE, (index,commentId) => ({index,commentId}));


const initialState = {
	list:{},
}

const createCommentDB = (postId, comment) => {
  return function(dispatch, getState, {history}){
		// const comment = {
		// 	comment:comment
		// }
      apis
				.addComment(postId, comment)
				.then((res) => {
					console.log(res);
					console.log(res.data.result.comment);
						// const newComment = res.data
						// dispatch(createComment(index,newComment))
						// dispatch(loadBoardDB())
						// dispatch(detailArticleDB(postId))
				}).catch((err) => {
						console.log(err)
				})
  }
}

// const deleteCommentDB = (postId,commentId,index) => {
//   return function(dispatch, getState, {history}){
//       apis
//       .DelComment(postId,commentId)
//       .then((res) => {
//           dispatch(deleteComment(index,commentId))
//           dispatch(loadBoardDB())
//           dispatch(detailArticleDB(postId))
//       }).catch((err) => {
//           console.log(err)
//       })
//   }
// }



export default handleActions(
  {
    [COMMENTLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
    [COMMENTCREATE]: (state, action) => produce(state, (draft) => {
      draft.list[action.payload.post_id].unshift(action.payload.comment);
    }),
  },
  initialState
);


const commentActions = {
	createCommentDB
}

export { commentActions };
