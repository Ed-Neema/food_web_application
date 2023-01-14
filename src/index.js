import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'

// render react DOM

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // whatever is being rendered, where it is being rendered
  document.getElementById("root")
);