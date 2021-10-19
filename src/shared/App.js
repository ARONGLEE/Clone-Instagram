import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Modal from "../components/Modal"

function App() {
  return (
    <React.Fragment>
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </BrowserRouter>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
