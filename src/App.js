/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RouterSetup from "./router/index";
import Loader from "./components/Loader";

const App = () => {
  return <RouterSetup />;
};

export default App;
