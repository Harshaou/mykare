import React from "react";
import { Avatar, Empty } from "antd";

const AdminComponenet = ({ state }) => {
  const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  return (
    <div className="flex flex-col mx-auto w-4/12 p-4 py-16 overflow-y-auto">
      {state.users.length < 1 ? (
        <div className="flex flex-col mx-auto">
          <h1 className="text-xl">Hello Admin. No users Registered yet..</h1>
          <Empty className="!mt-8" description={false} />
        </div>
      ) : (
        <p>Total users {state.users.length}</p>
      )}
      {state.users.map((item, index) => (
        <>
          <div
            key={item.username}
            className="bg-white flex w-full items-center gap-2 rounded-md mb-2 px-4 py-2"
          >
            <Avatar
              style={{
                verticalAlign: "middle",
                backgroundColor:
                  colorList[Math.floor(Math.random() * colorList.length)],
              }}
              size={50}
            >
              {item.name.slice(0, 1)}
            </Avatar>
            <div className="">
              <h1 className="mb-0">{item.name}</h1>
              <p className="mb-0 text-xs">{item.username}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AdminComponenet;
