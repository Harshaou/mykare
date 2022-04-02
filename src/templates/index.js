/* eslint-disable react/prop-types */
import React from 'react';
import HeaderMenu from './Header';

const Template = ({ children, layout }) => {
  const auth = false;
  return (
    <div className="w-full text-base ">
      <div className="mx-auto">
        {layout ? (
          <div>
            <HeaderMenu auth={auth} />
            <div className="">{children}</div>
          </div>
        ) : (
          <div className="">{children}</div>
        )}
      </div>
    </div>
  );
};

export { Template };
