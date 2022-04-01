import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { auth } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : false;

  return auth === true ? children : <Navigate to="/login" replace />;
};
