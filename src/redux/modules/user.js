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
const signupDB = (user_data) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(user_data)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => {
        window.alert("이미 존재하는 아이디입니다.");
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
        setCookie("token", res.data[2].token, 7);
        localStorage.setItem("userId", res.data[0].userId, 7);
        //이부분  이해 안되는....
        dispatch(setLogin({ id: id }));
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
    deleteCookie("token");
    localStorage.removeItem("userId");
    dispatch(logOut());
    history.replace("/login");
  };
};

//로그인체크
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem("userId");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setLogin({ id: userId }));
    } else {
      dispatch(logOutDB());
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
