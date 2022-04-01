import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { Template } from "../../templates";

const Resgister = () => {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    const authenticate = users.some(
      (item) => item.email === data.email && item.password === data.password
    );
    if (authenticate) {
      localStorage.setItem("auth", JSON.stringify({ auth: true }));
      navigate("/");
    } else {
      showMessage("Email or password is incorrect");
    }
  };

  const showMessage = (msg) => {
    message.error(msg);
  };

  return (
    <Template>
      <div className="w-full mx-auto">
        <div className=" flex flex-col items-center justify-center py-12">
          <div className="bg-white rounded-lg w-full sm:w-11/12 md:w-7/12 lg:w-4/12 p-10  pt-6">
            <div className="flex flex-col gap-3 justify-center px-4 w-full ">
              <div className="flex gap-3 items-center justify-center mb-5">
                <h2 className="mb-0 md:text-3xl ">Login</h2>
              </div>

              <Form className="" name="validate_other" onFinish={onSubmit}>
                <Form.Item
                  className="!m-0 !mb-3"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    className="ant-custom-input"
                  />
                </Form.Item>

                <Form.Item
                  className="!m-0 !mb-4"
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
                <Form.Item className="flex w-full  ">
                  <Button className="w-full" type="primary" htmlType="submit">
                    Login
                  </Button>
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

export default Resgister;
