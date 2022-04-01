import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { AiFillBell, AiFillMessage } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import DropDown from "./DropDown";
import { Menu, Dropdown, Space, Button } from "antd";
import { UserOutlined, LogoutOutlined, DownOutlined } from "@ant-design/icons";

const pages = ["home", "peers", "groups"];

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const isAuthenticated = true;

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50  px-6 bg-gray-300">
      <nav
        // style={
        //   scroll ? { backgroundColor: "white" } : { backgroundColor: "#f2f2f2" }
        // }
        className="flex justify-center lg:justify-between  px-16 py-4 backdrop-filter backdrop-blur-lg "
      >
        <button
          type="button"
          className="absolute text-primary outline-0 lg:hidden"
          style={{
            transform: "translateY(-50%)",
            top: "50%",
            left: "10px",
          }}
        >
          <CgMenuLeftAlt size={24} onClick={() => setSidebar(!sidebar)} />
        </button>
        {/* Mobile Screen */}
        <div className="lg:hidden ">
          {sidebar ? (
            <div className="bg-white left-0 h-screen w-full overflow-hidden fixed top-0 ">
              <div className="p-4">
                <div className="flex justify-center mb-6">
                  <Link to="/">
                    <div className="flex items-center">
                      <img src="icon-1.png" style={{ height: 25 }} alt="" />
                      <span className="ml-2 tracking-wider font-semibold">
                        Mykare
                      </span>
                      <span className="ml-2 font-light tracking-wider ">
                        <b className="font-semibold">Higher</b>
                        Standard
                      </span>
                    </div>
                  </Link>
                  <CgClose
                    className="right-0 absolute mr-2"
                    size={24}
                    onClick={() => setSidebar(!sidebar)}
                  />
                </div>

                <div className="">
                  <div className="flex flex-col uppercase text-gray-900 font-bold ">
                    <li className="text-sm text-black-500 px-4 py-3 hover:bg-green-200 rounded transition-colors duration-300">
                      <Link to="/">Be a expert</Link>
                    </li>

                    <div className="flex flex-col text-sm ">
                      <Link
                        className="border-2 border-green-500  mb-3 mt-6 py-3 rounded-md transition duration-150 ease-in-out min-w-[130px] text-center"
                        to="/login"
                      >
                        Login
                      </Link>
                      <Link
                        className="bg-[#00b074] hover:bg-green-600  py-3 rounded-md transition duration-150 ease-in-out min-w-[130px] text-center"
                        to="/signup"
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>

        {/* Mobile Over */}

        <Link className="" to="/">
          <div className="flex cursor-pointer items-center">
            <img src="icon-1.png" style={{ height: 25 }} alt="" />
            <span className="ml-2 tracking-wider font-semibold">Mykare</span>
          </div>
        </Link>

        <div className="hidden lg:block">
          <div className="flex ">
            <div className="flex items-center gap-3">
              <div className=" flex items-center gap-5 pl-4 ">
                {isAuthenticated && (
                  <>
                    <Button>Logout</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
