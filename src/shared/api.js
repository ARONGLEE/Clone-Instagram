// axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://13.125.63.44",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // User
  login: (id, pw) =>
    api.post("api/users/login", {
      loginId: id,
      userPw: pw,
    }),
  signup: (id, pw, name, nick) =>
    api.post("api/users/register", {
      userId: id,
      userPw: pw,
      userName: name,
      userNameId: nick,
    }),

  //Post
  // 게시물 불러오기
  getPost: () => api.get(""),
  // 게시물 작성하기
  addPost: (contents) => api.post("", contents),
  // 게시물 수정하기
  //editPost: (id, contents) => api.put("", contents),
  // 게시물 삭제하기
  delPost: (postId) => api.delete(""),
  // 게시물 상세 페이지
  detailPost: (postId) => api.get(""),

  // Like
   like: (postId) => api.post("api/likes/{postId}", {
    param : postId
   }),
    
  // Follow

  // comments
  AddComment: (postId, replyContent) => api.post(`/api/replyPost/${postId}`, {replyContent: replyContent}),
  DelComment: (postId,commentId) => api.delete(`/api/replyPost/${postId}/${commentId}`),
  // UpdateComment: (postId,commentId) => api.put(`/api/replyPost/${postId}/${commentId}`),

  
};



/// comments
const COMMENTLOAD = 'comment/LOAD';
const COMMENTDELETE = 'comment/DELETE';
const COMMENTCREATE = 'comment/CREATE';

/// comments
const loadComment = createAction(COMMENTLOAD, (comments) => ({comments}));
const createComment = createAction(COMMENTCREATE, (index,newComment) => ({index,newComment}));
const deleteComment = createAction(COMMENTDELETE, (index,commentId) => ({index,commentId}));


const createCommentDB = (postId,comment,index) => {
  return function(dispatch, getState, {history}){
      apis
      .AddComment(postId,comment)
      .then((res) => {
          const newComment = res.data
          dispatch(createComment(index,newComment))
          dispatch(loadBoardDB())
          dispatch(detailArticleDB(postId))
      }).catch((err) => {
          console.log(err)
      })
  }
}

const deleteCommentDB = (postId,commentId,index) => {
  return function(dispatch, getState, {history}){
      apis
      .DelComment(postId,commentId)
      .then((res) => {
          dispatch(deleteComment(index,commentId))
          dispatch(loadBoardDB())
          dispatch(detailArticleDB(postId))
      }).catch((err) => {
          console.log(err)
      })
  }
}