import { useEffect, useState } from "react";
import { Template } from "../../templates";
import AdminComponenet from "./AdminComponenet";
import UserComponent from "./UserComponent";

const Dashboard = () => {
  const [state, setState] = useState();

  useEffect(() => {
    (() => {
      let authUser = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : false;
      let users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];

      if (authUser.username.toLowerCase() === "admin") {
        let filtered = users.filter((item) => item.username !== "admin");
        setState({ users: filtered, admin: authUser });
      } else {
        setState(users.find((item) => item.username === authUser.username));
      }
    })();
  }, []);

  const renderData = () => {
    if (state && state.admin) {
      return <AdminComponenet state={state} />;
    } else if (state) {
      return <UserComponent state={state} />;
    }
  };

  return <Template layout={true}>{renderData()}</Template>;
};

export default Dashboard;
