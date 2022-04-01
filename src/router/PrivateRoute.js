import { Navigate } from "react-router-dom";
// import decode from 'jwt-decode';

export const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  let auth = true;
  // if (token) {
  //   const decodedToken = decode(token);
  //   const currentDate = new Date();
  //   if (!decodedToken.exp * 1000 < currentDate.getTime()) {
  //     auth = true;
  //   }
  // }
  return auth === true ? children : <Navigate to="/login" replace />;
};
