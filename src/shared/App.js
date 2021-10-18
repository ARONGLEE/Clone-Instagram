import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Post from "../components/Post";
import PostList from "../pages/PostList";

function App() {
  return (
    <React.Fragment>
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/post" exact component={Post} />
        </BrowserRouter>
      </React.Fragment>
    </React.Fragment>
  );
}

export default App;
