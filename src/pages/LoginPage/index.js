import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Template } from "../../templates";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Divider, Button, notification } from "antd";

const Login = () => {
  const router = useNavigate();
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    // dispatch(loginUserWithEmail(values, router, openNotificationWithIcon));
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Email or password is incorrect",
    });
  };

  return (
    <Template layout={false}>
      <div className="flex w-full  h-screen  justify-center ">
        <div className="bg-black hidden lg:flex w-5/12  justify-center items-center mx-auto">
          <div className=" w-10/12 -mt-32">
            <h1 className="text-white text-6xl w-full">
              Wooww, Love to see you back again{" "}
            </h1>
          </div>
        </div>

        <div className="bg-green-700  flex flex-col items-center justify-center -mt-28 md:w-7/12 py-12">
          <div className="bg-white rounded-lg w-full sm:w-11/12 md:w-8/12 lg:w-7/12 px-12 p-16 pt-6">
            <div className=" flex flex-col gap-3 justify-center px-4 w-full ">
              <div className="flex gap-3 items-center justify-center mb-5">
                <img src="icon-1.png" style={{ height: 35 }} alt="" />
                <h2 className="mb-0 text-3xl ">
                  Sign in to <span className="text-[#10b981]">samskara</span>
                </h2>
              </div>
              {/* <Divider /> */}

              <Form className="" name="validate_other" onFinish={onSubmit}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="Email" className="ant-custom-input" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="ant-custom-input"
                  />
                </Form.Item>
                <Form.Item className="flex w-full mt-2 ">
                  <button
                    className="w-full bg-[#00b074] h-10 rounded-lg text-white hover:bg-green-600 "
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </button>
                </Form.Item>
                <div className="w-full px-3 pt-2">
                  <div className="flex justify-between">
                    <Link to="/signup">Get Started</Link>
                    <Link to="/reset">Forgot Password</Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Login;
