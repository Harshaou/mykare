import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.css";
import "antd/dist/antd.min.css";
import "./styles/variables.less";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <div className="bg-gray-300 min-h-screen">
      <App />
    </div>
  </BrowserRouter>
);
