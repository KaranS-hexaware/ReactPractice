import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouterConfig from "./routerConfig";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <RouterConfig />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
