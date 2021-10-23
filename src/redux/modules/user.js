//redux-actions 가져오기
import { createAction, handleActions } from "redux-actions";
//immer 가져오기
import { produce } from "immer";
//Cookie 가져오기
import { deleteCookie, setCookie } from "../../shared/Cookie";
//axios 가져오기
import { apis } from "../../shared/api";

//actions
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

//actions creators
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
//회원가입
const signupDB = (id, pw, name, nick) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(id, pw, name, nick)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        window.alert("이미 존재하는 아이디입니다.");
        console.log(err);
      });
  };
};

//로그인
const setLoginDB = (id, pw) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(id, pw)
      .then((res) => {
        console.log(res);
        //setCookie("token", res.data[2].token, 7);
        //setCookie("token", res.data.token, 5);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        localStorage.setItem("nick", id);
        //sessionStorage.setItem("userId", id);
        //sessionStorage.setItem("token", res.data.token);
        console.log(id);
        dispatch(setLogin({ id }));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("아이디 및 비밀번호를 확인해주세요!");
      });
  };
};

//로그아웃
const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    //deleteCookie("token");
    localStorage.removeItem("token");
    localStorage.removeItem("nick");
    dispatch(logOut());
    history.replace("/login");
  };
};

//로그인체크
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const tokenCheck = localStorage.getItem("token");
    console.log(tokenCheck);
    if (tokenCheck) {
      dispatch(setLogin({ id: tokenCheck }));
    } else {
      dispatch(logOutDB());
      history.replace("/login");
    }
  };
};

//reducer
export default handleActions(
  {
    //어떤 액션에 대한 내용인지 바로 작성 ex.[LOGIN]
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        //setCookie("is_login", "success");
        //기본값인 initialState의 user에 user정보 넣기
        draft.user = action.payload.user;
        //기본값인 initialState의 is_login을 true로 변경
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
  },
  //기본값
  initialState
);

// action creator export
const userCreators = {
  setLogin,
  logOut,
  signupDB,
  setLoginDB,
  logOutDB,
  loginCheckDB,
};

export { userCreators };
