import React from "react";

import { Route } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../redux/modules/user";

import PostList from "../pages/PostList";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PostWrite from "../pages/PostWrite";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userCreators.loginCheckDB());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={PostList} />
        <Route path="/singup" exact component={SignUp} />
        <Route path="/write" exact component={PostWrite} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
