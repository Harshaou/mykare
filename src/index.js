import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.css";
import "antd/dist/antd.min.css";
import "./styles/variables.less";

ReactDOM.render(
  <BrowserRouter>
    <div className="bg-gray-300 min-h-screen">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
