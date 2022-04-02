import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Signup from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import NotFound from "../pages/404.js";

const RouterSetup = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RouterSetup;
