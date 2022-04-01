import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Divider, Button, notification } from "antd";
import { Link } from "react-router-dom";
import { Template } from "../../templates";

const Resgister = () => {
  const router = useNavigate();

  const [checkEmailisValid, setCheckEmailisValid] = useState();

  const onSubmit = (data) => {
    if (checkEmailisValid === "Valid") {
    }
  };

  const checkEmailVaild = (value) => {
    let l = value.replace(/\s+/g, ""),
      setCheckEmailisValid;
  };

  console.log("haha", checkEmailisValid);

  return (
    <Template>
      <div className="w-full mx-auto">
        <div className=" flex flex-col items-center justify-center py-12">
          <div className="bg-white rounded-lg w-full sm:w-11/12 md:w-7/12 lg:w-4/12 px-12 p-16 pt-6">
            <div className="flex flex-col gap-3 justify-center px-4 w-full ">
              <div className="flex gap-3 items-center justify-center mb-5">
                <h2 className="mb-0 md:text-3xl ">Create a Account</h2>
              </div>

              <Form className="" name="validate_other" onFinish={onSubmit}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input placeholder="Name" className="ant-custom-input" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => checkEmailVaild(e.target.value)}
                    placeholder="Email"
                    className="ant-custom-input"
                  />
                </Form.Item>
                {checkEmailisValid === "Already Exists" && (
                  <p style={{ color: "red", marginTop: -10, marginBottom: 10 }}>
                    Email is already in use
                  </p>
                )}

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
                  <Button type="primary" htmlType="submit">
                    Signup
                  </Button>
                </Form.Item>
                <div className="w-full px-3 pt-2">
                  <div className="flex justify-between">
                    <Link to="/login">Alreay have an account?</Link>
                    <Link to="/reset">Forgot password</Link>
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

export default Resgister;
