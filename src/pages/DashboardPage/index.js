import { useEffect, useState } from "react";
import { Template } from "../../templates";
import { MdWavingHand } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Divider } from "antd";

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
      return (
        <div className="flex flex-col mx-auto w-4/12 p-4 py-16 overflow-y-auto">
          <p>Total users {state.users.length}</p>
          {state.users.map((item, index) => (
            <>
              <div
                key={item.username}
                className="bg-white flex w-full items-center gap-2 rounded-md mb-2 px-4 py-2"
              >
                <FaUserCircle size={50} />
                <div className="">
                  <h1 className="mb-0">{item.name}</h1>
                  <p className="mb-0 text-xs">{item.username}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      );
    } else if (state) {
      return (
        <div className="flex flex-col justify-center items-center pt-20">
          <h1 className=" text-6xl capitalize">welcome {state.name}</h1>
          <MdWavingHand size={50} />
        </div>
      );
    }
  };

  return <Template layout={true}>{renderData()}</Template>;
};

export default Dashboard;
