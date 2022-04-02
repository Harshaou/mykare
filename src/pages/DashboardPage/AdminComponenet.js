/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar, Empty } from 'antd';
import { FaUsers } from 'react-icons/fa';

const AdminComponenet = ({ state }) => {
  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  return (
    <div className="flex flex-col mx-auto sm:w-8/12 md:w-5/12 p-4 py-8  overflow-y-auto">
      {state.users.length < 1 ? (
        <div className="flex flex-col mx-auto">
          <h1 className="text-xl">Hello Admin. No users Registered yet..</h1>
          <Empty className="!mt-8" description={false} />
        </div>
      ) : (
        <div className="flex items-center gap-2 mb-3">
          <FaUsers />
          <p className="mb-0">Total users {state.users.length}</p>
        </div>
      )}
      {state.users.map((item) => (
        <>
          <div
            key={item.username}
            className="bg-white flex w-full items-center gap-2 rounded-md mb-2 px-4 py-2"
          >
            <Avatar
              style={{
                verticalAlign: 'middle',
                backgroundColor:
                  colorList[Math.floor(Math.random() * colorList.length)],
              }}
              size={50}
            >
              {item.name.slice(0, 1)}
            </Avatar>
            <div className="">
              <h1 className="-mb-1">{item.name}</h1>
              <p className="mb-0 text-xs font-semibold text-gray-600">
                {item.username}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AdminComponenet;
