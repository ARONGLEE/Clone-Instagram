// axios
import axios from "axios";

const USER_TOKEN = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://13.125.63.44",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${USER_TOKEN}`;
    return config;
  },
  function (error) {
    console.log("err");
    return Promise.reject(error);
  }
);

// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // User
  login: (id, pw) =>
    api.post("/api/users/login", {
      loginId: id,
      userPw: pw,
    }),
  signup: (id, pw, name, nick) =>
    api.post("/api/users/register", {
      userId: id,
      userPw: pw,
      userName: name,
      userNameId: nick,
    }),

  //Post
  // 게시물 불러오기
  getPost: () => api.get("/api/posts"),
  // 게시물 작성하기
  addPost: (contents) => api.post("", contents),
  // 게시물 수정하기
  //editPost: (id, contents) => api.put("", contents),
  // 게시물 삭제하기
  delPost: (postId) => api.delete(`api/posts/${postId}/delete`),
  // 게시물 상세 페이지
  detailPost: (postId) => api.get(""),

  // Like
  addLike: (postId) => api.post(`/api/likes/${postId}`),
  deleteLike: (postId) => api.delete(`/api/likes/${postId}`),

  // comments
  getComment: (postId) => api.get(`/api/replyList/${postId}`),
  addComment: (postId, comment) =>
    api.post(`/api/replyPost/${postId}`, { comment: comment }),
};
