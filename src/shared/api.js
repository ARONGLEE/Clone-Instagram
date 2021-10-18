// axios
import axios from "axios";

const api = axios.create({
  baseURL: "",
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

  // Comments

  // Follow
};
