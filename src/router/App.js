import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import blog from '../compontents/blog/blog';
import FeatureBlog from '../compontents/blog/FeatureBlog';
import blogSingle from '../compontents/blog/blogSingle';



function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path="/" component={blog} />
         
          <Route exact path="FeatureBlog" component={FeatureBlog} />

          <Route exact path="blogSingle" component={blogSingle} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
