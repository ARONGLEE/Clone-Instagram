import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import {ConnectedRouter} from 'connected-react-router';
import { history } from './redux/configureStore';

import PostList from "../pages/PostList";
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Modal from "../components/Modal"

function App() {
  return (
    <React.Fragment>
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </ConnectedRouter>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
